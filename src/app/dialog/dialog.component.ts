import { Component, OnInit, Inject, CUSTOM_ELEMENTS_SCHEMA, VERSION } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { ReactiveFormsModule, FormGroup, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Experiment } from '../experiments/experiment';

export interface DialogData {
  startdate: Date;
  enddate: Date;
}

@Component({
  selector: 'app-dialog',
  // imports: [ReactiveFormsModule],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  /* ngOnInit(): void {
    this.form = new FormGroup({
      startdate: new FormControl('', Validators.required),
      enddate: new FormControl('', Validators.required)
    });
    
  }

  get f(){
    return this.form.controls;
  } */


  ////submit(startdate: string, enddate: string){
  /////  console.log(startdate + " $$ " + enddate);
    //this.experimentService.create(this.form.value).subscribe((res:any) => {
      //   console.log('Experiment created successfully!');
       //  this.router.navigateByUrl('experiments');

  ////  this.dialogRef.close(startdate, enddate);
   // })
  ////}


  close(): void {
    this.dialogRef.close();
  }

}
