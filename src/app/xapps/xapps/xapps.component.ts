import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { XappsService } from '../xapps.service';
import { Xapp } from '../xapp';

@Component({
  selector: 'app-xapps',
  standalone: true,
  imports: [ CommonModule, RouterModule ],
  templateUrl: './xapps.component.html',
  styleUrl: './xapps.component.css'
})
export class XappsComponent {
  xapps: Xapp[] = [];

  constructor(public xappsService: XappsService, 
              private router: Router) { }

  ngOnInit(): void {
    this.xappsService.getAll().subscribe((data: Xapp[])=>{
      this.xapps = data; 
      console.log(this.xapps);
    })  
  }

  filterxApps(filter: string) {
    this.xappsService.filterxApps(filter).subscribe((filtereddata: Xapp[])=>{
      this.xapps = filtereddata;
    })   
  }

  deleteXapp(id:number) {
    this.xappsService.deleteXapp(id).subscribe(res => {
      location. reload();
    })
  }

}
