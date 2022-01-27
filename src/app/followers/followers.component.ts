import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FollowersService } from '../services/follower.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  followers?: any[];
  constructor(
    private route: ActivatedRoute,
    private follower: FollowersService
    ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response)=>{
      var debug = response.get('debug');
      console.log("Debug:"+debug);

    })
    this.follower.getAll()
      .subscribe(response => {
        this.followers = response;
      })
  }

}
