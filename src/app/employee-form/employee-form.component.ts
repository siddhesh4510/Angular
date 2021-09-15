import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public formModel={
      name:null,
      email:null,
      phone:null,
      dob:null,
      address:null
      

  }

  submitInformation(form: NgForm){
    
    if( this.formModel.name && this.formModel.email && this.formModel.phone && this.formModel.dob && this.formModel.address){
      // console.log(this.formModel);
      console.log(form.value)
      
      form.resetForm();
    }
    
  }

}
