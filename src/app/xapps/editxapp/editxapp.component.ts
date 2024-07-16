import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { XappsService } from '../xapps.service';
import { Xapp } from '../xapp';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editxapp',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './editxapp.component.html',
  styleUrl: './editxapp.component.css'
})
export class EditxappComponent {
  id!: number;
  xapp: Xapp;
  form!: FormGroup;

  constructor(
    public xappsService: XappsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['xappId'];
    console.log(this.id);
    this.xappsService.find(this.id).subscribe((data: Xapp)=>{
      this.xapp = data;    
    }); 

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status:  new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.form.controls;
  }


  submit(){
    console.log(this.form.value);
    this.xappsService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('xApp updated successfully!');
         this.router.navigateByUrl('/xapps');
    })
  }
}
