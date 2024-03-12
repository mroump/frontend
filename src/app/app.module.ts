import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppAuthGuard } from './app.authguard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import {bootstrapApplication} from '@angular/platform-browser';
import * as globalVariables from './globalVariables';

const keycloakService = new KeycloakService();

@NgModule
({
  schemas: [
  CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule, FirstpageComponent
  ],
  providers: [AppAuthGuard, 
    KeycloakService, 
    {
    provide: KeycloakService,
    useValue: keycloakService
    ////useFactory: () => keycloakService
  }] ,
})

export class AppModule implements DoBootstrap { 
  ngDoBootstrap(app: ApplicationRef) {
    keycloakService
      .init({
        config: {
          url: globalVariables.keycloakUrl,
          realm: globalVariables.keycloakrealm,
          clientId: globalVariables.keycloakclientId,
        },        
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
          checkLoginIframe: false
        },
       
        loadUserProfileAtStartUp: true
      })
      .then(() => {
        app.bootstrap(AppComponent);
      })
      .catch((error) =>
        console.error('[ngDoBootstrap] init Keycloak failed', error)
      );
  }
}

