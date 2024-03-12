import { Routes } from '@angular/router';

import { AppAuthGuard } from './app.authguard';
import { XyzComponent } from './xyz/xyz.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AppComponent } from './app.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: FirstpageComponent,
    canActivate: [AppAuthGuard]
    //data: { roles: ['user'] },
  },
  {
    path: 'profile',
    component: XyzComponent
  }
];