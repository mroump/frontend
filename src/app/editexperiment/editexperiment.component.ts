import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentService } from '../experiments/experiment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiment } from '../experiments/experiment';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editexperiment',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editexperiment.component.html',
  styleUrl: './editexperiment.component.css'
})
export class EditexperimentComponent {
  id!: number;
  experiment: Experiment;
  form!: FormGroup;
  currentFile?: File;
  message = '';
  fileInfos?: Observable<any>;

  constructor(
    public experimentService: ExperimentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['experimentId'];
    this.experimentService.find(this.id).subscribe((data: Experiment)=>{
      this.experiment = data;    
    }); 

    this.fileInfos = this.experimentService.getFiles();
        
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      startdate: new FormControl('', [Validators.required]),
      enddate:  new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

/*   upload(): void {
    if (this.currentFile) {
      this.experimentService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.experimentService.getFiles();
          }
        },
        error: (err: any) => {
          console.log(err);

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  } */


  submit(){
    console.log(this.form.value);
    if (this.currentFile) {
      this.experimentService.update(this.id, this.form.value).subscribe((res:any) => {
              
      })
      this.experimentService.upload(this.currentFile).subscribe({
        next: (event: any) => {
          this.router.navigateByUrl('experiments');

          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.experimentService.getFiles();
          }
        },
        error: (err: any) => {
          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }

}
