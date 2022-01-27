import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive-home',
  templateUrl: './archive-home.component.html',
  styleUrls: ['./archive-home.component.css']
})
export class ArchiveHomeComponent implements OnInit {

  archieveTime = [
    {year: 2017, month:1},
    {year: 2017, month:2},
    {year: 2017, month:3}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
