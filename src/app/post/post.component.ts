import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts?: any[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(response => {
        this.posts = response;
      }, (error : Response) => {
        alert('unexpected error occured!!!!.......');
        console.log(error);
      })
  }
  createPost(input: HTMLInputElement) {

    let post = { title: input.value }
    this.service.create(post)
      .subscribe(response => {
        this.posts?.splice(0, 0, { id: response.id, title: input.value })
        console.log(response.id)
      }, (error : Response) => {
        alert('unexpected error occured!!!!.......');
        console.log(error);
      })
  }

  updateTitle(post?: any) {
    this.service.update(post)
      .subscribe(
        response => {
          let index = this.posts?.indexOf(post);
          post.title = "updated"+ index;
          console.log(response)
        }, (error : Response) => {
          alert('unexpected error occured!!!!.......');
          console.log(error);
        }
      )
  }

  deleteTitle(post?: any) {
    this.service.delete(post)
      .subscribe(
        response => {
          this.posts?.splice(this.posts?.indexOf(post), 1);
        }, (error : Response) => {
          if(error.status === 400)
          alert('unexpected error occured!!!!.......');
          console.log(error);
        }
      )
  }
}


