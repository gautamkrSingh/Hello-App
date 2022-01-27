import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  categories = [
    {id :1, name:"Development"},
    {id :2, name:"Art"},
    {id :1, name:"Languages"},
  ];

  onsubmit(value?:any){
    console.log(value);
  }

}
