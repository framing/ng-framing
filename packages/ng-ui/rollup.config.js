import typescript from 'rollup-plugin-typescript';

const globals = {
  '@angular/core': 'ng.core',
  '@framing/ng-core': 'framing.ng-core',
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
  entry: '../../dist/packages-dist/ng-ui/@framing/ng-ui.es5.js',
  dest: '../../dist/packages-dist/ng-ui/bundles/ng-ui.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'framing.ng-ui',
  plugins: [typescript({typescript: require('typescript')})],
  external: Object.keys(globals),
  globals: globals
};
