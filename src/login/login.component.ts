import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.frm = this.fb.group({
      username : ['', [Validators.minLength(3), Validators.required], ],
      password: ['', [Validators.minLength(8), Validators.maxLength(30), Validators.required], ],
    });

    this.frm.valueChanges.subscribe(console.log);
  }

  // tslint:disable-next-line: no-input-rename
  @Input('moe-title') title: string;

  private passwordVisible = false;
  private onFocusName = true;
  private onFocusPass = true;

  login(): void {
    if (this.name.value == 'admin' && this.pass.value == 'admin') {
     this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }

  }

  get name() {
    return this.frm.get('username');
  }

  get pass() {
    return this.frm.get('password');
  }
  }
