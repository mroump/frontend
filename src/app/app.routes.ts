import { Routes } from '@angular/router';
import { KeycloakAuthGuard } from './app.authguard';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { ExperimentsStatusComponent } from './experiments-status/experiments-status.component';
import { ExperimentsResultsComponent } from './experiments-results/experiments-results.component';
import { XappsComponent } from './xapps/xapps/xapps.component';
import { NewxappComponent } from './xapps/newxapp/newxapp.component';
import { EditxappComponent } from './xapps/editxapp/editxapp.component';
import { ViewxappComponent } from './xapps/viewxapp/viewxapp.component';
import { RepositoryComponent } from './repository/repository.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
    //data: { roles: ['user'] },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'experiments',
    component: ExperimentsComponent,
    //canActivate: [KeycloakAuthGuard]
  },
 /*  {
    path: 'experiments/:filter',
    component: ExperimentsComponent,
    //canActivate: [KeycloakAuthGuard]
  }, */
  {
    path: 'experiments_status/:exp_name',
    component: ExperimentsStatusComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'experiments_results/:exp_name',
    component: ExperimentsResultsComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'xapps',
    component: XappsComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'xapps/:filter',
    component: XappsComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'newxapp',
    component: NewxappComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'editxapp/:xappId',
    component: EditxappComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'viewxapp/:xappId',
    component: ViewxappComponent,
    //canActivate: [KeycloakAuthGuard]
  },
  {
    path: 'repository',
    component: RepositoryComponent,
    //canActivate: [KeycloakAuthGuard]
  },
];