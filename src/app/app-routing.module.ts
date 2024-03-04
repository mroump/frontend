import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppAuthGuard } from './app.authguard';
import { XyzComponent } from './xyz/xyz.component';
import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  {
    path: 'xyz',
    component: XyzComponent,
    canActivate: [AppAuthGuard]
    //data: { roles: ['user'] },
  },
  {
    path: '',
    component: FirstpageComponent,  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AppAuthGuard]
})
export class AppRoutingModule {}