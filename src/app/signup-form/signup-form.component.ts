import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidators } from '../register/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    contact : new FormGroup({
      username: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotHaveSpace,
        // UsernameValidators.checkUnique
      ]
    ),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    )
    })
  })

  get username() {
    return this.form.get('contact.username');
  }
  get password() {
    return this.form.get('contact.password');
  }

  onclick(username?:any){
    console.log(username);
  }
  login(){
    this.form.setErrors({
      useranme : "username is not valid"
    })
  }
}
