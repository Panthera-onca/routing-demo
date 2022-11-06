import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { EnrollementService } from '../enrollement.service';
import {FormBuilder, Validator, Validators} from '@angular/forms';
import { forbiddeNameValidator } from '../shared/user-name.validator';


@Component({
  selector: 'app-ccomponent',
  templateUrl: './ccomponent.component.html',
  styleUrls: ['./ccomponent.component.css']
})
export class CcomponentComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  registrationForm =this.fb.group({
    userName: ['Vishvas', [Validators.required, Validators.minLength(3), forbiddeNameValidator]],
    password: [''],
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  ngOnInit(): void {
  }

}
