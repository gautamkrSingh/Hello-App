import { capsPipe } from './caps.pipe';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';
import { PostService } from './services/post.service';
import { StarComponent } from './star/star.component';
import { TitleComponent } from './title/title.component';
import { TestPipe } from './test.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { RegisterComponent } from './register/register.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddLearningComponent } from './add-learning/add-learning.component';
import { NewFormComponent } from './new-form/new-form.component';
import { PostComponent } from './post/post.component';
import { msHttpInterceptorsAndHandler } from './interceptor/interceptor.index';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/follower.service';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchiveHomeComponent } from './archive-home/archive-home.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';

@NgModule({
  declarations: [
    SignupFormComponent,
    AppComponent,
    CoursesComponent,
    StarComponent,
    TitleComponent,
    capsPipe,
    TestPipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    RegisterComponent,
    AddLearningComponent,
    NewFormComponent,
    PostComponent,
    FollowersComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    ArchiveHomeComponent,
    ArchiveDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    msHttpInterceptorsAndHandler,
    PostService,
    CoursesService,
    FollowersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
