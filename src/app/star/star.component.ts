import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  // encapsulation : ViewEncapsulation.Emulated
})
export class StarComponent implements OnInit {
  @Input('star-flag') starFlag = true;
  @Output('change') Click = new EventEmitter();

  toggleStar(){
    this.starFlag =  !this.starFlag;
    this.Click.emit({newValue : this.starFlag});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
export interface FavoruteChangeArgs{
  newValue : boolean
}
