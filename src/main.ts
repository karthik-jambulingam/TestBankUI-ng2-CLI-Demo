import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { BankOnlineModule } from './app/TMP.BNK.Online/bank-online.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BankOnlineModule);
