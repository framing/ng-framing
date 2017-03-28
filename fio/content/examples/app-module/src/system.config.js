var angularVersion = '4.0.0';
var framingVersion = '0.6.10';

System.config({
  baseUrl: '/',
  paths: {
    'unpkg:*': 'https://unpkg.com/*'
  }
});

System.config({
  transpiler: 'typescript',
  typescriptOptions: { emitDecoratorMetadata: true },

  meta: {
    '*': {
      deps: [ 'zone.js', 'reflect-metadata' ]
    }
  }
});

System.config({
  packageConfigPaths: [
    "unpkg:@*/*/package.json"
  ],

  map: {
    '@angular/core': 'unpkg:@angular/core@'+angularVersion,
    '@angular/compiler': 'unpkg:@angular/compiler@'+angularVersion,
    '@angular/common': 'unpkg:@angular/common@'+angularVersion,
    '@angular/forms': 'unpkg:@angular/forms@'+angularVersion,
    '@angular/router': 'unpkg:@angular/router@'+angularVersion,
    '@angular/platform-browser': 'unpkg:@angular/platform-browser@'+angularVersion,
    '@angular/platform-browser-dynamic': 'unpkg:@angular/platform-browser-dynamic@'+angularVersion,
    '@framing/ng-core': 'unpkg:@framing/ng-core@'+framingVersion,
    'lodash': 'unpkg:lodash@4.17.4',
    'rxjs': 'unpkg:rxjs@5.2.0/bundles/Rx.js',
    'rxjs/Observable': 'unpkg:rxjs@5.2.0/bundles/Rx.js',
    'rxjs/Subject': 'unpkg:rxjs@5.2.0/bundles/Rx.js',
    'rxjs/BehaviorSubject': 'unpkg:rxjs@5.2.0/bundles/Rx.js',
    'rxjs/Rx': 'unpkg:rxjs@5.2.0/bundles/Rx.js',
    'rxjs/util/EmptyError': 'unpkg:rxjs@5.2.0/util/EmptyError',
    'rxjs/observable/merge': 'unpkg:rxjs@5.2.0/observable/merge',
    'rxjs/observable/from': 'unpkg:rxjs@5.2.0/observable/from',
    'rxjs/observable/of': 'unpkg:rxjs@5.2.0/observable/of',
    'rxjs/observable/fromPromise': 'unpkg:rxjs@5.2.0/observable/fromPromise',
    'rxjs/observable/forkJoin': 'unpkg:rxjs@5.2.0/observable/forkJoin',
    'rxjs/operator/first': 'unpkg:rxjs@5.2.0/operator/first',
    'rxjs/operator/share': 'unpkg:rxjs@5.2.0/operator/share',
    'rxjs/operator/reduce': 'unpkg:rxjs@5.2.0/operator/reduce',
    'rxjs/operator/concatMap': 'unpkg:rxjs@5.2.0/operator/concatMap',
    'rxjs/operator/concatAll': 'unpkg:rxjs@5.2.0/operator/concatAll',
    'rxjs/operator/last': 'unpkg:rxjs@5.2.0/operator/last',
    'rxjs/operator/map': 'unpkg:rxjs@5.2.0/operator/map',
    'rxjs/operator/mergeMap': 'unpkg:rxjs@5.2.0/operator/mergeMap',
    'rxjs/operator/catch': 'unpkg:rxjs@5.2.0/operator/catch',
    'rxjs/operator/every': 'unpkg:rxjs@5.2.0/operator/every',
    'rxjs/operator/filter': 'unpkg:rxjs@5.2.0/operator/filter',
    'rxjs/operator/mergeAll': 'unpkg:rxjs@5.2.0/operator/mergeAll',
    'zone.js': 'unpkg:zone.js@0.8.5',
    'reflect-metadata': 'unpkg:reflect-metadata@0.1.10',
    "crypto": "@empty",
    "main": "main.ts"
  },

  packages: {
    'app': {
      defaultExtension: 'ts',
      main: 'main.ts',
    }
  }
});
