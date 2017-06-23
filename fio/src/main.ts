import './polyfills';
import './vendor';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
import { GuidelinesModule } from './app/guidelines/guidelines.module';

/* tslint:disable:no-var-requires */
const buildConfig = require('build-config'); // require path is a webpack config alias
/* tslint:enable:no-var-requires */

if (buildConfig.isReleaseBuild) {
  // put Angular runtime into production mode
  enableProdMode();
  /* tslint:disable:no-console */
  console.info('Angular production mode enabled');
  /* tslint:enable:no-console */
  console.log = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.group = () => {};
}

platformBrowserDynamic().bootstrapModule(GuidelinesModule)
  .catch((err) => console.error(err))
  .then((platformRef) => { console.log('Bootstrap done'); });
