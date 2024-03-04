import { Routes } from '@angular/router';

import { AppAuthGuard } from './app.authguard';
import { XyzComponent } from './xyz/xyz.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

export const APP_ROUTES: Routes = [
  {
    path: 'xyz',
    component: XyzComponent,
    canActivate: [AppAuthGuard]
    //data: { roles: ['user'] },
  },
  {
    path: '',
    component: FirstpageComponent,  
  }
];