import { Component, Input } from '@angular/core';
import {KeycloakService} from '../keycloak-service.service';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
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
