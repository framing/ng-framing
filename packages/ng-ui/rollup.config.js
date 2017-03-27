export default {
  entry: '../../dist/packages-dist/ng-ui/@framing/ng-ui.es5.js',
  dest: '../../dist/packages-dist/ng-ui/bundles/ng-ui.umd.js',
  format: 'umd',
  exports: 'named',
  moduleName: 'ng.ui',
  globals: {
    'rxjs/Observable': 'Rx',
    'rxjs/Subject': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/Subscription': 'Rx',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/operator/share': 'Rx.Observable.prototype'
  }
};
