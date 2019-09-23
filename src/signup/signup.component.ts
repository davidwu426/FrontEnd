import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private passwordVisible = false;
  private form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.min(3), Validators.required]],
      email : ['', [Validators.required, Validators.email], ],
      cemail : ['', [ Validators.required, Validators.email], ],
      password: ['', [Validators.minLength(8), Validators.maxLength(30), Validators.required], ],
      cpassword: ['', [Validators.minLength(8), Validators.maxLength(30), Validators.required], ],
    });
    this.form.valueChanges.subscribe(console.log);
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

