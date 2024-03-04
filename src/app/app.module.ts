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

const keycloakService = new KeycloakService();

@NgModule
({
  declarations: [
    //AppComponent
    //XyzComponent,
    //FirstpageComponent
  ],
  imports: [
    KeycloakAngularModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule//,
    //RouterLink, RouterLinkActive, RouterOutlet
  ],
  providers: [AppAuthGuard, {
    provide: KeycloakService,
    useValue: keycloakService
  }] ,
  //entryComponents: [AppComponent],
  bootstrap: [AppComponent]
  //bootstrapApplication(AppComponent);

})

export class AppModule implements DoBootstrap { 
  ngDoBootstrap(app: ApplicationRef) {
    keycloakService
      .init({
        config: {
          url: 'http://localhost:8080',
          realm: 'frontend',
          clientId: 'myclient',
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            window.location.origin + '/assets/silent-check-sso.html',
          checkLoginIframe: false,
          redirectUri: 'http://localhost:4200',
        },
      })
      .then(() => {
        app.bootstrap(AppComponent);
      })
      .catch((error) =>
        console.error('[ngDoBootstrap] init Keycloak failed', error)
      );
  }
}

