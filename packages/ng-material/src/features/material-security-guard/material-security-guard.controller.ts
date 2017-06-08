import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { MaterialSecurityGuardModel as M } from './material-security-guard.model';

@Injectable()
export class MaterialSecurityGuardController extends Controller<M, void> { }
