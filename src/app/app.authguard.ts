import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';

import {KeycloakService} from './keycloak-service.service';


export abstract class KeycloakAuthGuard implements CanActivate {

  protected authenticated: boolean;
  protected roles: string[];

  constructor(
    protected router: Router,
    protected keycloakAngular: KeycloakService
  ) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    try {
      this.authenticated = await this.keycloakAngular.isLoggedIn();
      this.roles = await this.keycloakAngular.getUserRoles(true);

      return await this.isAccessAllowed(route, state);
    } catch (error) {
      throw new Error(
        'An error happened during access validation. Details:' + error
      );
    }
  }

  abstract isAccessAllowed(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree>;
}