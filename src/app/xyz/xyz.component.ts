import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FirstpageComponent } from '../firstpage/firstpage.component';

@Component({
  selector: 'app-xyz',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, FirstpageComponent ],
  templateUrl: './xyz.component.html',
  styleUrl: './xyz.component.css'
})
export class XyzComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
