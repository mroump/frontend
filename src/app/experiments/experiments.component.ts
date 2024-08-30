import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentService } from './experiment.service';
import { RouterModule, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [RouterModule, CommonModule, MatTabsModule],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent {
  devices:any;
  experiments:any = [];
  status:any;
  exp_status:string;

  
  constructor(public experimentService: ExperimentService, 
              private router: Router,
              public dialog: MatDialog) { }
  
  ngOnInit(): void {    
    this.experimentService.getAllDevices().subscribe(res => {
      this.devices = res;
      console.log(this.devices);
    });

    this.experimentService.getAllExperiments().subscribe(res => {
      this.experiments = res;
      console.log(this.experiments);
    });
  }


}
