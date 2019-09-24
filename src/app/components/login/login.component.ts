import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import {ValidatorService} from '../../service/validator.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frm: FormGroup;

  // tslint:disable-next-line: no-input-rename
  @Input('title') title: string;

  private passwordVisible = false;
  private onFocusName = true;
  private onFocusPass = true;
  private linkName = 'Register';

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.frm = this.fb.group({
      username : ['', [Validators.minLength(3), Validators.required], ],
      password: ['', [Validators.minLength(2), Validators.maxLength(30), Validators.required], ],
    }, {
      updateOn: 'blur',
      validator: ValidatorService.loginEval,
    });

    this.frm.valueChanges.subscribe(console.log);
  }
  // TODO: make this work
  validateForm() {
    console.log('sure');
    if (this.frm.valid) {
      this.router.navigate(['/resources']);
    }
    }

  get name() {
    return this.frm.get('username');
  }

  get pass() {
    return this.frm.get('password');
  }

}
