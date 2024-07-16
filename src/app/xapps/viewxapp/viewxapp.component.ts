import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { XappsService } from '../xapps.service';
import { Xapp } from '../xapp';

@Component({
  selector: 'app-viewxapp',
  standalone: true,
  imports: [],
  templateUrl: './viewxapp.component.html',
  styleUrl: './viewxapp.component.css'
})
export class ViewxappComponent {
  id!: number;
  xapp: Xapp;

  constructor(
    public xappsService: XappsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['xappId'];
    console.log(this.id);
    this.xappsService.find(this.id).subscribe((data: Xapp)=>{
      this.xapp = data;    
    }); 
  }

}
