import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent implements OnInit {

  ngForm: FormGroup;
  title:string="Emxcel travel solution"
  firstname: string='';
  lastname: string='';
  dob: Date = null;
  address:string='';
  gender:string='';
  playlist:string='';
  Email:string='';
  toggle:number=0;
  constructor(private fb: FormBuilder) {

    this.ngForm=this.fb.group({
      "firstname": ['',Validators.required],
      "lastname": ['',Validators.required],
      "dob":[null,Validators.required],
      "address": ['',Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      "gender":['',Validators.required],
      "playlist":['',Validators.required],
      "Email":['',Validators.required],
      "toggle":[null]
    })
   }

  ngOnInit(): void {
  }

  click(event:any){
    if(event.checked == true){
      this.toggle =1;
    }else{
      return false;
    }
  }
  submit(form:NgForm){
    console.log(form);
  }
}
