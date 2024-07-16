import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { XappsService } from '../xapps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newxapp',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './newxapp.component.html',
  styleUrl: './newxapp.component.css'
})
export class NewxappComponent {
  form!: FormGroup;

  constructor(
    public xappsService: XappsService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  }
      
  get f(){
    return this.form.controls;
  }

  submit(){   
    this.xappsService.create( this.form.value).subscribe((res:any) => { 
      console.log('xApp created successfully!');
      this.router.navigateByUrl('xapps');
    })
  }
      
}
