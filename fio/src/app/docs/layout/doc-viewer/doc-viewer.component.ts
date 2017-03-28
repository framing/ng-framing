import {
  Component, ComponentFactory, ComponentFactoryResolver, ComponentRef,
  DoCheck, ElementRef, EventEmitter, Injector, Input, OnDestroy,
  Output,
} from '@angular/core';

import { EmbeddedComponents } from 'app/docs/embedded';
import { DocumentContents } from 'app/docs/documents/document.service';

interface EmbeddedComponentFactory {
  contentPropertyName: string;
  factory: ComponentFactory<any>;
}

// Initialization prevents flicker once pre-rendering is on
const initialDocViewerElement = document.querySelector('fio-doc-viewer');
const initialDocViewerContent = initialDocViewerElement ? initialDocViewerElement.innerHTML : '';

@Component({
  selector: 'fio-doc-viewer',
  template: '',
  styles: [ `
    :host >>> doc-title.not-found h1 {
      color: white;
      background-color: red;
    }
  ` ],
  // TODO(robwormald): shadow DOM and emulated don't work here (?!)
  // encapsulation: ViewEncapsulation.Native
})
export class DocViewerComponent implements DoCheck, OnDestroy {

  @Output()
  docRendered: EventEmitter<DocumentContents> = new EventEmitter<DocumentContents>();

  private displayedDoc: DisplayedDoc;
  private embeddedComponentFactories: Map<string, EmbeddedComponentFactory> = new Map();
  private hostElement: HTMLElement;

  constructor(
    componentFactoryResolver: ComponentFactoryResolver,
    elementRef: ElementRef,
    embeddedComponents: EmbeddedComponents,
    private injector: Injector,
  ) {
    this.hostElement = elementRef.nativeElement;
    // Security: the initialDocViewerContent comes from the prerendered DOM and is considered to be secure
    this.hostElement.innerHTML = initialDocViewerContent;

    for (const component of embeddedComponents.components) {
      const factory = componentFactoryResolver.resolveComponentFactory(component);
      const selector = factory.selector;
      const contentPropertyName = this.selectorToContentPropertyName(selector);
      this.embeddedComponentFactories.set(selector, { contentPropertyName, factory });
    }
  }

  @Input()
  set doc(newDoc: DocumentContents) {
    this.ngOnDestroy();
    if (newDoc) {
      this.build(newDoc);
      this.docRendered.emit(newDoc);
    }
  }

  ngDoCheck(): void {
    if (this.displayedDoc) { this.displayedDoc.detectChanges(); }
  }

  ngOnDestroy(): void {
    // destroy components otherwise there will be memory leaks
    if (this.displayedDoc) {
      this.displayedDoc.destroy();
      this.displayedDoc = undefined;
    }
  }

  /**
   * Add doc content to host element and build it out with embedded components
   */
  private build(doc: DocumentContents): void {

    const displayedDoc = this.displayedDoc = new DisplayedDoc(doc);

    // security: the doc.content is always authored by the documentation team
    // and is considered to be safe
    this.hostElement.innerHTML = doc.contents || '';

    if (!doc.contents) { return; }

    // TODO(i): why can't I use for-of? why doesn't typescript like Map#value() iterators?
    this.embeddedComponentFactories.forEach(({ contentPropertyName, factory }, selector) => {
      const embeddedComponentElements: HTMLElement[] = this.hostElement.querySelectorAll(selector) as any;

      // cast due to https://github.com/Microsoft/TypeScript/issues/4947
      for (const element of embeddedComponentElements){
        // hack: preserve the current element content because the factory will empty it out
        // security: the source of this innerHTML is always authored by the documentation team
        // and is considered to be safe
        (element as any)[contentPropertyName] = element.innerHTML;
        displayedDoc.addEmbeddedComponent(factory.create(this.injector, [], element));
      }
    });
  }

  /**
   * Compute the component content property name by converting the selector to camelCase and appending
   * 'Content', e.g. live-example => liveExampleContent
   */
  private selectorToContentPropertyName(selector: string): string {
    return selector.replace(/-(.)/g, (match, $1) => $1.toUpperCase()) + 'Content';
  }
}

class DisplayedDoc {

  private embeddedComponents: ComponentRef<any>[] = [];

  constructor(public doc: DocumentContents) {}

  addEmbeddedComponent(component: ComponentRef<any>): void {
    this.embeddedComponents.push(component);
  }

  detectChanges(): void {
    this.embeddedComponents.forEach((comp) => comp.changeDetectorRef.detectChanges());
  }

  destroy(): void {
    // destroy components otherwise there will be memory leaks
    this.embeddedComponents.forEach((comp) => comp.destroy());
    this.embeddedComponents.length = 0;
  }
}
