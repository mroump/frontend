import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { XyzComponent } from '../xyz/xyz.component';

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [ RouterLink, RouterLinkActive, RouterOutlet, XyzComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.css'
})
export class FirstpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}