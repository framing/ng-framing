import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DocumentContents } from '../../documents/document.service';

@Component({
  selector: 'fio-dt',
  template: `
  <div *ngIf="on">
    <hr>
    <textarea #dt [value]="text" rows="10" cols="80"></textarea>
    <br/>
    <button (click)="dtextSet()">Show change</button>
  </div>
  `,
})
export class DtComponent {

  @Input() on: boolean = false;
  @Input('doc') doc: DocumentContents;
  @Output() docChange: EventEmitter<DocumentContents> = new EventEmitter<DocumentContents>();

  @ViewChild('dt', { read: ElementRef })
  dt: ElementRef;

  get text(): string { return this.doc && this.doc.contents; }

  dtextSet(): void {
    this.doc.contents = this.dt.nativeElement.value;
    this.docChange.emit({ ...this.doc });
  }
}
