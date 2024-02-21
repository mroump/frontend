import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
  keycloak.init({
    config: {
      url: 'http://localhost:8080/admin',
      realm: 'frontend',
      clientId: 'myclient'
    },
    initOptions: {
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: 
        window.location.origin + '/assets/silent-check-sso.html'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }