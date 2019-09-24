import { Injectable } from '@angular/core';
import { ValidatorFn, FormGroup, FormControl } from '@angular/forms';
import { NullAstVisitor } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {



static matchEmail: ValidatorFn = (fg: FormGroup) => {
  if (fg.get('email').value === fg.get('cemail').value && fg.get('email').value !== null){
    return null;
  }
  return {emailMismatch: true};
}

static matchPassword: ValidatorFn = (fg: FormGroup) => {
  if (fg.get('password').value === fg.get('cpassword').value && fg.get('password').value !== null) {
    return null;
  }
  return {passwordMismatch: true};
}

static loginEval: ValidatorFn = (fg: FormGroup) => {
  if (fg.get('password').value === 'admin' && fg.get('username').value === 'admin') {
    return null;
  }
  return {passwordMismatch: true};
}

// TODO: wrapper function to make use of adding formControl Vars or possibly injection
// static matchTwoFields(fg: FormGroup, first: FormControl, second: FormControl){

//   if (first.parent === fg && second.parent === fg) {
//     return (fg): ValidatorFn => {
//       if (first.value === second.value && first.value !== null) {
//         return null;
//       }
//       return {fieldMismatch: true};
//     };
//   }
// }

public childrenExist(fg: FormGroup, first: FormControl, second: FormControl) {
  return first.parent === fg && second.parent === fg;
}


}
