import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeycloakAuthGuard } from './app.authguard';
import { APP_ROUTES } from './app.routes';

@NgModule({
   imports: [RouterModule.forRoot(APP_ROUTES)],
   exports: [RouterModule]
})
export class AppRoutingModule {}