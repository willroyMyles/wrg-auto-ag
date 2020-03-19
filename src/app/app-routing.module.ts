import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PartsViewComponent } from './parts-view/parts-view.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostViewComponent } from './post-view/post-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path : '' , component : LandingPageComponent},
  {path: "login", component : LoginComponent},
  {path : "signup", component : SignupComponent},
  {path : "parts/:section/:parts", component : PartsViewComponent},
  {path : "create-post" , component : CreatePostComponent},
  {path : "post/:id", component : PostViewComponent},
  {path : "dashboard", component : DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
