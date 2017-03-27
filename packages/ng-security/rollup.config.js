/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export default {
  entry: '../../dist/packages-dist/ng-security/@framing/ng-security.es5.js',
  dest: '../../dist/packages-dist/ng-security/bundles/ng-security.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.security',
  globals: {
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/operator/share': 'Rx.Observable.prototype'
  }
};
