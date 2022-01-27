import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive-detail',
  templateUrl: './archive-detail.component.html',
  styleUrls: ['./archive-detail.component.css']
})
export class ArchiveDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  archieveHeading?: string;
  onSubmit(){
    this.router.navigate(["/"])
  }



  ngOnInit(): void {
    this.route.paramMap.subscribe(data=>{
      var year = data.get('year');
      var month = data.get('month');
      this.archieveHeading = "Achieve For"+year+"/"+month;
    })
  }

}
