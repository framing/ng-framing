import { Component, Input } from '@angular/core';
import { NavigationNode } from 'app/docs/navigation/navigation.service';

@Component({
  selector: 'fio-nav-menu',
  template: `<fio-nav-item *ngFor="let node of nodes" [selectedNodes]="selectedNodes" [node]="node"></fio-nav-item>`,
})
export class NavMenuComponent {

  @Input()
  selectedNodes: NavigationNode[];

  @Input()
  nodes: NavigationNode[];
}
