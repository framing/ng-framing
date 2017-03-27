import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { Framing } from '@framing/ng-core';

import { ItemDeleteComponent } from './item-delete.component';
import { ItemEditComponent } from './item-edit.component';
import { ItemFormComponent } from './item-form.component';
import { ItemListComponent } from './item-list.component';
import { ItemNewComponent } from './item-new.component';
import { ItemComponent } from './item.component';

import { SharedModule } from '../shared/shared.module';

@NgModule(Framing((framing) => framing
  .imports([
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    SharedModule,
  ])
  .declarationsAndEntryComponents([
    ItemDeleteComponent,
    ItemEditComponent,
    ItemFormComponent,
    ItemListComponent,
    ItemComponent,
    ItemNewComponent,
  ]),
))
export class ItemComponentsModule {}
