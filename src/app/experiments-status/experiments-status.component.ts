import { Component } from '@angular/core';
import { ExperimentService } from '../experiments/experiment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experiments-status',
  standalone: true,
  imports: [],
  templateUrl: './experiments-status.component.html',
  styleUrl: './experiments-status.component.css'
})
export class ExperimentsStatusComponent {
  exp_name!: string;
  status:any;
  exp_status:string;

  constructor(
    public experimentService: ExperimentService,
    private route: ActivatedRoute
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
