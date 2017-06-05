import typescript from 'rollup-plugin-typescript';

const globals = {
  '@angular/core': 'ng.core',
  'rxjs/Observable': 'Rx',
  'rxjs/ReplaySubject': 'Rx.ReplaySubject',
  'rxjs/Subject': 'Rx',
  'rxjs/Observer': 'Rx',
  'rxjs/AnonymousSubscription': 'Rx',
  'rxjs/Subscription': 'Rx',
  'rxjs/observable/merge': 'Rx.Observable',
  'rxjs/operator/share': 'Rx.Observable.prototype'
};

export default {
  entry: '../../dist/packages-dist/ng-core/@framing/ng-core.es5.js',
  dest: '../../dist/packages-dist/ng-core/bundles/ng-core.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'framing.ng-core',
  plugins: [typescript({typescript: require('typescript')})],
  external: Object.keys(globals),
  globals: globals
};
