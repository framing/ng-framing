import { Component, Input } from '@angular/core';
import { CurrentNode, NavigationNode } from '../../navigation/navigation.service';

@Component({
  selector: 'fio-nav-menu',
  template: `
  <fio-nav-item *ngFor="let node of filteredNodes" [node]="node" [selectedNodes]="currentNode.nodes">
  </fio-nav-item>`,
})
export class NavMenuComponent {
  @Input() currentNode: CurrentNode;
  @Input() nodes: NavigationNode[] ;
  get filteredNodes(): any[] { return this.nodes ? this.nodes.filter((n) => !n.hidden) : []; }
}
