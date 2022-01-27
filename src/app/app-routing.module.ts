import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { FollowersComponent } from './followers/followers.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "",
    component: ArchiveHomeComponent
  },
  {
    path: "archieve/:year/:month",
    component: ArchiveDetailComponent
  },
  {
    path: "Register",
    component: RegisterComponent
  },
  {
    path: "follower/:id/:username",
    component: GithubProfileComponent
  },
  {
    path: "follower",
    component: FollowersComponent
  },
  {
    path: "post",
    component: PostComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
