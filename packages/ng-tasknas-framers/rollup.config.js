/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

export default {
  entry: '../../dist/packages-dist/ng-tasknas-framers/@framing/ng-tasknas-framers.es5.js',
  dest: '../../dist/packages-dist/ng-tasknas-framers/bundles/ng-tasknas-framers.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.tasknas-framers',
  globals: {
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/operator/share': 'Rx.Observable.prototype'
  }
};
