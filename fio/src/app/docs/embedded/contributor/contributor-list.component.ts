import { Component, OnInit } from '@angular/core';
import { Contributor } from './contributors.model';
import { ContributorService } from './contributor.service';

@Component({
  selector: `fio-contributor-list`,
  template: `
  <section *ngFor="let group of groups" class="grid-fluid">
    <h4 class="title">{{group}}</h4>
    <fio-contributor *ngFor="let person of contributorGroups[group]" [person]="person"></fio-contributor>
  </section>`,
})
export class ContributorListComponent implements OnInit {
  contributorGroups: Map<string, Contributor[]> = new Map<string, Contributor[]>();
  groups: string[];

  constructor(private contributorService: ContributorService) { }

  ngOnInit(): void {
    this.contributorService.contributors.subscribe((cgs) => {
      this.groups = [ 'Lead', 'Google', 'Community' ];
      this.contributorGroups = cgs;
    });
  }
}
