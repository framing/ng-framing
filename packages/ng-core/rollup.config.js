export default {
  entry: '../../dist/packages-dist/ng-core/@framing/ng-core.es5.js',
  dest: '../../dist/packages-dist/ng-core/bundles/ng-core.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.core',
  globals: {
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/operator/share': 'Rx.Observable.prototype'
  }
};
