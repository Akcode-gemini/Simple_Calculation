import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary modules

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  myForm!: FormGroup; // Declare a FormGroup variable
  opSign:string="+";
  result:number=0;
  opCount:number=0;
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      input1: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Validations for input1
      input2: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Validations for input2
    });
  }
  addFun(){
    if (this.opSign!="+"){
      this.opCount++;
    }
    this.opSign="+"
    this.result=+this.myForm.value.input1 + +this.myForm.value.input2
  }
  subFun(){
    if (this.opSign!="-"){
      this.opCount++;
    }
    this.opSign="-"
    this.result=+this.myForm.value.input1 - +this.myForm.value.input2
  }
  mulFun(){
    if (this.opSign!="*"){
      this.opCount++;
    }
    this.opSign="*"
    this.result=+this.myForm.value.input1 * +this.myForm.value.input2
  }
  divFun(){
    if (this.opSign!="/"){
      this.opCount++;
    }
    this.opSign="/"
    this.result=+this.myForm.value.input1 / +this.myForm.value.input2
  }
  reset(){
    this.myForm.reset()
    this.opSign="+"
    this.result=0
    this.opCount++;
  }



}
