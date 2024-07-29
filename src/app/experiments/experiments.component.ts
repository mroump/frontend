import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentService } from './experiment.service';
import { Experiment } from './experiment';
import { RouterModule, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-experiments',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './experiments.component.html',
  styleUrl: './experiments.component.css'
})
export class ExperimentsComponent {
  experiments: Experiment[] = [];
  startdate: Date;
  enddate: Date;
  
  constructor(public experimentService: ExperimentService, 
              private router: Router,
              public dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.experimentService.getAll().subscribe((data: Experiment[])=>{     
      this.experiments = data; 
    })  
  }

  calculateDiff(dateSent: any, currentDate: any){
    currentDate = new Date(currentDate);
    dateSent = new Date(dateSent);

    var diff = currentDate.getTime() - dateSent.getTime();

    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
    return { days: days, hours: hours, minutes: minutes };
  }

  filterExperiments(filter: string) {
    this.experimentService.filterExperiments(filter).subscribe((filtereddata: Experiment[])=>{
      this.experiments = filtereddata;
    })   
  }
 
  startExperiment(id:number) {
    this.experimentService.startExperiment(id).subscribe(res => {
      location. reload();
    })
  }

  endExperiment(id:number) {
    this.experimentService.endExperiment(id).subscribe(res => {
      location. reload();
    })
  }

  showDialog(id:number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      data: {startdate: this.startdate, enddate: this.enddate}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log("All the data "+ result);

      const startdate: Date = result['startdate'];
      const enddate: Date = result['enddate'];
      console.log("startdate: "+ startdate);
      console.log("enddate: "+ enddate);

      this.experimentService.scheduleExperiment(id, startdate, enddate).subscribe(res => {
        location. reload();
      })
    });
  }
  

}
