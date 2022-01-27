import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { oldPasswordValidators } from './oldPssword.validators';

@Component({
  selector: 'new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent {
  confirmErrorflag = false;
      form = new FormGroup({
        oldPassword: new FormControl(
          '',
          [
            Validators.required,
            oldPasswordValidators.checkoldPasssword
          ]
        ),
        newPassword: new FormControl(
          '',
        [
          Validators.required
        ]),
        confirmPassword: new FormControl(
          '',
        [
          Validators.required
        ])
      });

      get oldPassword(){
        return this.form.get('oldPassword');
      }
      get newPassword(){
        return this.form.get('newPassword');
      }
      get confirmPassword(){
        return this.form.get('confirmPassword');
      }

      confirmPassowrdCheck(){
        this.confirmErrorflag = (this.form.value.newPassword != this.form.value.confirmPassword);
        console.log(this.confirmErrorflag);
        
      }

}
