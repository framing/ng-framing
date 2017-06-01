import { Injectable } from '@angular/core';
import { Controller } from '@framing/ng-core';

import { MaterialModel as M } from './material.model';
import { MaterialView as V } from './material.view';

export class MaterialController extends Controller<M, V> {}
