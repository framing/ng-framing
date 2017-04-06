import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { ConnectableObservable } from 'rxjs';

import { Contributor } from './contributors.model';

const contributorsPath = 'content/contributors.json';

@Injectable()
export class ContributorService {
  contributors: Observable<Map<string, Contributor[]>>;

  constructor(private http: Http) {
    this.contributors = this.getContributors();
  }

  private getContributors(): ConnectableObservable<Map<string, Contributor[]>> {
    const contributors = this.http.get(contributorsPath)
      .map((res) => res.json())
      .map((contribs) => {
        const contribGroups = new Map<string, Contributor[]>();

        Object.keys(contribs).forEach((key) => {
          const contributor = contribs[key];
          const group = contributor.group;
          const contribGroup = (contribGroups as any)[group];
          if (contribGroup) {
            contribGroup.push(contributor);
          } else {
            (contribGroups as any)[group] = [ contributor ];
          }
        });

        return contribGroups;
      })
      .publishLast();
    contributors.connect();
    return contributors;
  }
}
