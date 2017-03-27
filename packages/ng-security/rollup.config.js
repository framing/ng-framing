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
