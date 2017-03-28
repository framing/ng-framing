import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationNode } from 'app/docs/navigation/navigation.service';

@Component({
  selector: 'fio-nav-item',
  templateUrl: 'nav-item.component.html',
})
export class NavItemComponent implements OnChanges {
  @Input() selectedNodes: NavigationNode[];
  @Input() node: NavigationNode;
  @Input() level: number = 1;

  isExpanded: boolean = false;
  isSelected: boolean = false;
  classes: {[index: string]: boolean };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedNodes || changes.node) {
      this.isSelected = this.selectedNodes.indexOf(this.node) !== -1;
      this.isExpanded = this.isExpanded || this.isSelected;
    }
    this.setClasses();
  }

  setClasses(): void {
    this.classes = {
      ['level-' + this.level]: true,
      collapsed: !this.isExpanded,
      expanded: this.isExpanded,
      selected: this.isSelected,
    };
  }

  itemClicked(): void {
    this.isExpanded = true;
    this.isSelected = !!this.node;
  }

  headerClicked(): void {
    this.isExpanded = !this.isExpanded;
    this.setClasses();
  }
}
