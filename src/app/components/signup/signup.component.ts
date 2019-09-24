import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ValidatorService} from '../../service/validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // toggle for show :: hide whatsapp
  private passwordVisible = false;
  // toggle for form submit
  // private formValid = false;
  // path to route signup complete
  private routPath = '/login';
  // link nanme
  private linkName = 'Sign Up';
  private form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.min(3), Validators.required]],
      email : ['', [Validators.required, Validators.email], ],
      cemail : ['', [ Validators.required, Validators.email], ],
      password: ['', [Validators.minLength(8), Validators.maxLength(30), Validators.required], ],
      cpassword: ['', [Validators.minLength(8), Validators.maxLength(30), Validators.required], ]},
      {
        validator: [ValidatorService.matchEmail, ValidatorService.matchPassword]},
      );
    this.form.valueChanges.subscribe(console.log);
  }

//TODO: make this work
  validateForm() {
    console.log('sure');
    }

  raisePasswordMismatch() {
    if (this.pass.touched && this.cpass.value !== '' ) {
      if (this.pass.value !== '') {
        if (this.form.errors.passwordMismatch) {
          return true;
        }
        return null;
      }
    }
  }
  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get cemail() {
    return this.form.get('cemail');
  }

  get pass() {
    return this.form.get('password');
  }

  get cpass() {
    return this.form.get('cpassword');
  }

}

