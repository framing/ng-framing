import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { DialogModel } from './dialog.model';

@Injectable()
export class DialogController extends Controller<DialogModel, void> {
}
