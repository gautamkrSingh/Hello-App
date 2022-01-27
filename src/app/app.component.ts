import { Component } from '@angular/core';
import { FavoruteChangeArgs } from './star/star.component';

import { likeChangeArgs } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  post = {
    starFlag: true,
    title :'MyAngularApp'
  }

  // post = {
  //   body: 'body',
  //   isLike: false,
  //   likeCount: 0
  // }

  courses = [
    {id  : 1, name : "angular"},
    {id  : 2, name : "react"},
    {id  : 3, name : "PHP"}
  ];
  // currentView = 'map';

  contactMethods = [
    {id : 1, name: "Email"},
    {id : 2, name: "Phone"}
  ];

  onFavoruteChange(args: FavoruteChangeArgs) {
    console.log("Favorute got changed!!....:", args);
  }

  // likeNotifier(args: likeChangeArgs) {
  //   console.log("like status has been changed", args)
  // }
  addItem(){
    this.courses.push({id:4, name: "python"});
  }
  removeItem(course?:any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  updateItem(course?:any){
   course.name = 'updated';
  }
  dataLog(data?:any){
    console.log(data);
  }
  onSubmit(f?:any){
    console.log(f.value);
  }
}
