import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { XyzComponent } from '../xyz/xyz.component';
import { HeaderComponent } from '../header/header.component';
import {KeycloakService} from 'keycloak-angular';
import * as globalVariables from '../globalVariables';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, XyzComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})

export class FirstpageComponent implements OnInit {

  constructor(private keycloak: KeycloakService) { }

  ngOnInit() {
      console.log(this.keycloak.getUsername());
  }
   

  async logout() {
    window.location.href = globalVariables.keycloakLogoutUrl;
  }
}