import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { KeycloakService } from './keycloak-service.service';
import { KeycloakBearerInterceptor } from './keycloak-bearer.interceptor';

@NgModule({
  imports: [CommonModule],
  providers: [
    KeycloakService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {}