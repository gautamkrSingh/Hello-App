import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
  @Input() likeFlag = false;
  @Output() click = new EventEmitter(); 

  isLiked = false;
  likeCount = 5;
  marAsLiked(){
    this.isLiked = !this.isLiked;
    this.likeCount = (this.isLiked) ? (this.likeCount + 1) : (this.likeCount - 1);
    this.click.emit({likeStatus: this.isLiked});
  }
}
export interface likeChangeArgs{
  likeStatus : boolean
}
