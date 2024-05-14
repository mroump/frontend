import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { KeycloakProfile } from 'keycloak-js';
import {KeycloakService} from '../keycloak-service.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})

export class ProfileComponent implements OnInit {

  fullname: string = '';
  userData: any;
   //public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  // submitForm = this.formBuilder.group({
  // });

  constructor(
  //   private formBuilder: FormBuilder,
    private readonly keycloak: KeycloakService
  ) {}

  public async ngOnInit() {
         
    this.userData = await this.keycloak.loadUserProfile();
    //this.fullname = this.userProfile.firstName + '  ' + this.userProfile.lastName;
    
    console.log(this.userData.attributes['address']);

  }

  // onSubmit(): void { 
  // }

  // saveButton() {    
  // }

}
