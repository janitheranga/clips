import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

firebase.initializeApp(environment.firebase);

let appInit = false;

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    appInit = true;
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  }
  appInit = true;
});

if (environment.production) {
  enableProdMode();
}
