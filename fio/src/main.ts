import './polyfills';
import './vendor';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/* tslint:disable:no-var-requires */
const buildConfig = require('build-config'); // require path is a webpack config alias
/* tslint:enable:no-var-requires */

if (buildConfig.isReleaseBuild) {
  // put Angular runtime into production mode
  enableProdMode();
  console.warn('Production mode enabled');
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.group = () => {};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err) => console.error(err))
  .then((platformRef) => { console.log('Bootstrap done'); });
