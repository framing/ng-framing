import { NgModule } from '@angular/core';
import { FramingNgModule } from './framing-ng-module';

type FramingNgModuleBuilder = (framing: FramingNgModule) => FramingNgModule;

/* tslint:disable:variable-name */
export const Framing = (ngModuleBuilder: FramingNgModuleBuilder): NgModule => {
/* tslint:enable:variable-name */

  let framing = ngModuleBuilder(new FramingNgModule());
  if (!framing) {
    console.error('Framing must return a FramingNgModule');
    return {};
  }
  return framing.build();
};
