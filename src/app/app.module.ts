import { BrowserModule } from '@angular/platform-browser';
import {  APP_INITIALIZER, NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/////import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
/////import { KeycloakAngularModule } from 'keycloak-angular';keycloak-angular.module
import {KeycloakService} from './keycloak-service.service';
import { KeycloakAngularModule } from './keycloak-angular.module';

import { KeycloakAuthGuard } from './app.authguard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {bootstrapApplication} from '@angular/platform-browser';
import * as globalVariables from './globalVariables';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: globalVariables.keycloakUrl,
        realm: globalVariables.keycloakrealm,
        clientId: globalVariables.keycloakclientId
      },
      initOptions: {
        onLoad: 'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      loadUserProfileAtStartUp: true
    });
}

@NgModule
({
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule {}

