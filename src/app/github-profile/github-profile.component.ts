import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    var order = this.route.snapshot.queryParamMap.get('order');
    console.log("snapshot:"+order)
    this.route.paramMap.subscribe((data)=>{
      console.log(data.get('id'))
      console.log(data.get('username'))
    })
    this.route.queryParamMap.subscribe((data)=>{
      console.log(data.get('page'))
      console.log(data.get('order'))
    })
  }

}
