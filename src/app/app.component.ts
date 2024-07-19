import { Component, OnInit, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KeycloakProfile } from 'keycloak-js';
import {KeycloakService} from './keycloak-service.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from "@angular/material/list";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive, 
    RouterOutlet,
    HeaderComponent, 
    FooterComponent, 
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  fullname: string = '';
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  opened = true;
  constructor(private readonly keycloak: KeycloakService) {}

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
       this.userProfile = await this.keycloak.loadUserProfile();
       this.fullname = this.userProfile.firstName + '  ' + this.userProfile.lastName;
       this.firstname = this.userProfile.firstName + '  ' + this.userProfile.lastName;
       this.lastname = this.userProfile.firstName + '  ' + this.userProfile.lastName;
       this.fullname = this.userProfile.firstName + '  ' + this.userProfile.lastName;
     }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }
  
}
