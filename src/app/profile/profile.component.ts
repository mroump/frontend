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
  firstname: string = '';
  lastname: string = ''!;
  email: string = '';
   //public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  // submitForm = this.formBuilder.group({
  // });

  constructor(
  //   private formBuilder: FormBuilder,
    private readonly keycloak: KeycloakService
  ) {}

  public async ngOnInit() {
 
    this.userProfile = await this.keycloak.loadUserProfile();
    this.fullname = this.userProfile.firstName + '  ' + this.userProfile.lastName;
    console.log(this.userProfile.firstName);
    
  }

  // onSubmit(): void { 
  // }

  // saveButton() {    
  // }

}
