import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[listItem]',
})
export class ListItemDirective {
  /*tslint:disable*/
  @Input('listItem') itemData: any;
  /*tslint:enable*/
}
