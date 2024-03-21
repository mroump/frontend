import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { XyzComponent } from '../xyz/xyz.component';
import {KeycloakService} from '../keycloak-service.service';
//import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import * as globalVariables from '../globalVariables';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, XyzComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})

export class FirstpageComponent implements OnInit {
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  username: string;

  constructor(private readonly keycloak: KeycloakService) { }

  public async ngOnInit() {
    //this.isLoggedIn = await this.keycloak.isLoggedIn();
    //console.log(this.isLoggedIn);

    this.keycloak.loadUserProfile().then(profile => {
      
      console.log(profile.firstName);
    });

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      console.log(this.userProfile);
    }
  }

   

  async logout() {
    window.location.href = globalVariables.keycloakLogoutUrl;
  }
}