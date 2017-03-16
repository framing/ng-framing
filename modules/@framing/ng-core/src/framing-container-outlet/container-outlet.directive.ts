import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AnonymousSubscription } from 'rxjs/Subscription';

import { FramingContainerOutlet } from './container-outlet';
import { FramingContainerOutletContent } from './container-outlet-content';
import { FramingContainerOutletService } from './container-outlet.service';

import * as _ from 'lodash';

class ActivatedContent {
  content: FramingContainerOutletContent;
  ref: ComponentRef<any>;
}

@Directive({
  selector: '[framingContainerOutlet]',
})
export class FramingContainerOutletDirective implements OnInit, OnDestroy, FramingContainerOutlet {
  @Input() framingContainerOutlet: string;
  @Input() optionalContainer: boolean;
  @Input() useViewInjector: boolean;
  @Input() content: any[][];

  @Output() onComponents: EventEmitter<ComponentRef<any>[]> = new EventEmitter<ComponentRef<any>[]>();

  private _activated: ActivatedContent[] = [];

  private _subscriptions: AnonymousSubscription[] = [];

  constructor(
    private _view: ViewContainerRef,
    private _containerService: FramingContainerOutletService,
    private _router: Router,
  ) {}

  containerName(): string { return this.framingContainerOutlet; }

  isActivated(): boolean { return this._activated.length > 0; }

  ngOnInit(): void {
    if (!this.framingContainerOutlet) {
      console.warn('FramingContainerOutlet without a container name');
    } else {
      if (this.framingContainerOutlet[0] === '\'') {
        console.warn(`FramingContainerOutlet name "${this.framingContainerOutlet}" starts with a qoute`);
      }
      this._subscriptions.push(this._containerService.contents$.subscribe((contents: FramingContainerOutletContent[]) => this.onContent(contents)));
    }

    this._subscriptions.push(this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (!this.optionalContainer && !this.isActivated()) {
          console.warn(`No content for required FramingContainerOutlet '${this.framingContainerOutlet}' found`);
        }
      }
    }));
  }

  ngOnDestroy(): void {
    this._activated.forEach((a) => this.deactivate(a));
    this._subscriptions.forEach((s) => s.unsubscribe());
  }

  private onContent(allContents: FramingContainerOutletContent[]): void {
    const contents: FramingContainerOutletContent[] = allContents.filter((c) => _.isEqual(c.container, this.framingContainerOutlet));

    // remove all content that is no longer active
    this._activated.forEach((a) => {
      if (contents.findIndex((content) => content === a.content) === -1) {
        this.deactivate(a);
      }
    });
    this._activated = this._activated.filter((a) => !!a.ref);

    // now setup the new activated components
    let i = 0;
    for (let content of contents) {
      if (this._activated.length > i) {
        if (this._activated[i].content !== content) {
          // look for this content
          const activatedIndex = this._activated.findIndex((a) => a.content === content);
          if (activatedIndex === -1) {
            // activate this content at i
            this._activated.splice(i, 0, { content, ref: this.activate(content) });
          } else if (activatedIndex > i) {
            // move content from activatedIndex to i
            const _activated = this._activated.splice(activatedIndex, 1);
            this._activated.splice(i, 0, ..._activated);
            const view = this._view.detach(activatedIndex);
            this._view.insert(view, i);
          } else {
            console.error('Logic error in FramingContainerOutlet!');
          }
        }
      } else {
        // activate this content
        const ref = this.activate(content);
        if (ref) {
          this._activated.push({ content, ref });
        }
      }
      i++;
    }

    this.onComponents.emit(this._activated.map((a) => a.ref));
  }

  private activate(content: FramingContainerOutletContent, i?: number): ComponentRef<any> {
    try {
      const injector = (!this.useViewInjector && content.injector) ? content.injector : this._view.parentInjector;
      const factory = injector.get(ComponentFactoryResolver).resolveComponentFactory(content.component);
      let ref = this._view.createComponent(factory, i, injector, this.content);
      try {
        ref.changeDetectorRef.detectChanges();
      } catch (e) {
        console.error(`detectChanges failed on activated component in FramingContainerOutlet '${this.framingContainerOutlet}'`, { e, component: content.component });
      }
      return ref;
    } catch (e) {
      console.error(`Failed to activate component in FramingContainerOutlet '${this.framingContainerOutlet}'`, { e, component: content.component });
      return undefined;
    }
  }

  private deactivate(activated: ActivatedContent): void {
    activated.ref.destroy();
    activated.ref = null;
  }
}
