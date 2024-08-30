import { Component } from '@angular/core';
import { ExperimentService } from '../experiments/experiment.service';
import { ActivatedRoute } from '@angular/router';

import { Pipe, PipeTransform } from '@angular/core'; 
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-experiments-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiments-results.component.html',
  styleUrl: './experiments-results.component.css'
})
export class ExperimentsResultsComponent {
  exp_name!: string;
  plot: any;
  csiData: any;
  powerData: any;

    constructor(
    public experimentService: ExperimentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void { 
    this.exp_name = this.route.snapshot.params['exp_name'];
    
    this.experimentService.resultsPlot(this.exp_name).subscribe(res => {
      console.log(res);
      this.plot = res;
      console.log(this.plot);
    });


    this.experimentService.resultsCSI(this.exp_name).subscribe(res => {
      console.log(res);
      this.csiData =  JSON.stringify(res, undefined, 4) 
            .replace(/ /g, ' ') 
            .replace(/\n/g, '<br/>');
    });

    this.experimentService.resultsPower(this.exp_name).subscribe(res => {
      console.log(res);
      this.powerData =  JSON.stringify(res, undefined, 4) 
            .replace(/ /g, ' ') 
            .replace(/\n/g, '<br/>');
    });


  }

}
