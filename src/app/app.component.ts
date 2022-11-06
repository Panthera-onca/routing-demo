import { Component } from '@angular/core';
import { User } from './user';
import { EnrollementService } from './enrollement.service';
import {FormControl, FormGroup} from '@angular/forms';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadApiData(){
    this.registrationForm.setValue({
      userName: 'Vishvas',
      password: 'test',
      confirmPassword: 'test',
      address:{
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    })
  }
  topics= ['Angular','React','Vue'];
  submitted = false;
  errorMsg = '';
  userModel = new User('Rob', 'rob@test.com', 5554445566, '','morning', true);
  constructor(private _enrollementService: EnrollementService){};
  onSubmit(){
    this.submitted = true;
    this._enrollementService.enroll(this.userModel)
      .subscribe(
        (        data: any) => console.log('Success', data),
        (        error: any) => this.errorMsg = error.statusText
        
      )
  }
}


