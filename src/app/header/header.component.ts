import { Component, Input } from '@angular/core';
import {KeycloakService} from '../keycloak-service.service';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() fullname = '';

  constructor(private readonly keycloak: KeycloakService) { }

  public logout() {
    this.keycloak.logout();
  }
}
