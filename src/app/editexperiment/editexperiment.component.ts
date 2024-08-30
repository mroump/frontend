import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentService } from '../experiments/experiment.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editexperiment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './editexperiment.component.html',
  styleUrl: './editexperiment.component.css'
})
export class EditexperimentComponent {
  exp_name!: string;
  status:any;
  exp_status:string;

  constructor(
    public experimentService: ExperimentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.exp_name = this.route.snapshot.params['exp_name'];
    this.experimentService.getExperimentsStatus(this.exp_name).subscribe(res => {
      this.status = res;
      if(this.status.running) {
        this.exp_status = 'Running';
      }
      else {
        this.exp_status = 'Stopped';
      }
    });
    
  }

 
  startExperiment(exp_name:string) {
    this.experimentService.startExperiment(this.exp_name).subscribe(res => {     
      console.log(res);
    }, error => {
      console.log(error);
    }, () => {
      this.exp_status = 'Running';
    });    
  }

  endExperiment(exp_name: string) {
    this.experimentService.endExperiment(this.exp_name).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    }, () => {
      this.exp_status = 'Stopped';
    });
  }

}
