export default {
  entry: '../../dist/packages-dist/ng-material/@framing/ng-material.es5.js',
  dest: '../../dist/packages-dist/ng-material/bundles/ng-material.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.material',
  globals: {
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/operator/share': 'Rx.Observable.prototype'
  }
};
