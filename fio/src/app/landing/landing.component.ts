import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'landing',
  templateUrl: './landing.component.html',
  styleUrls: [ './landing.component.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class LandingComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {

   /* Create the twttr.widgets.load() so tslint will compile it.
    * Widget.js from twitter injected on index.html will overwrite this function after it's loaded. */
    let twttr = {
      widgets: {
        load(): void { console.log('window not loaded'); },
      },
    };

    setTimeout(() => {
      twttr.widgets.load();
    }, 100);
  }
}
