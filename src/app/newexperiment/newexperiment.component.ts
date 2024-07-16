import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ExperimentService } from '../experiments/experiment.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon'
import { finalize } from 'rxjs';

@Component({
  selector: 'app-newexperiment',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  templateUrl: './newexperiment.component.html',
  styleUrl: './newexperiment.component.css'
})
export class NewexperimentComponent {
  form!: FormGroup;
  currentFile?: File;
  message = '';
  fileInfos?: Observable<any>;
  
  //status: "initial" | "uploading" | "success" | "fail" = "initial";
  //file: File | null = null;

  //fileName = '';

  constructor(
    public experimentService: ExperimentService,
    private router: Router,
    private http: HttpClient
  ) { }
      

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      //file: new FormControl(null, [Validators.required]),
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    });
  }
      
  get f(){
    return this.form.controls;
  }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

 

  submit(){   
    /* if(this.file) {
      this.experimentService.create(this.file.name, this.form.value).subscribe((res:any) => { 
        console.log('Experiment created successfully!');
        this.router.navigateByUrl('experiments');
      })
    } */

    console.log(this.form.value);
    if (this.currentFile) {
      this.experimentService.create(this.form.value).subscribe((res:any) => {
              
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
