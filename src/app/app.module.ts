import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeJumboComponent } from './welcome-jumbo/welcome-jumbo.component';
import { LoginInPartialComponent } from './login-in-partial/login-in-partial.component';
import { SearchPartialComponent } from './search-partial/search-partial.component';
import { CaregoryPartialComponent } from './caregory-partial/caregory-partial.component';
import { LineDividerComponent } from './line-divider/line-divider.component';
import {HttpClientModule} from '@angular/common/http';
import { PartsSectionComponent } from './parts-section/parts-section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PartsViewComponent } from './parts-view/parts-view.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ReactiveFormsModule } from "@angular/forms";
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component'
import {MomentModule} from "ngx-moment";
import { PostViewComponent } from './post-view/post-view.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { ReplyViewComponent } from './reply-view/reply-view.component';
import { PostStatusComponent } from './post-status/post-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiLoaderComponent } from './ui-loader/ui-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeJumboComponent,
    LoginInPartialComponent,
    SearchPartialComponent,
    CaregoryPartialComponent,
    LineDividerComponent,
    PartsSectionComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    PartsViewComponent,
    CreatePostComponent,
    NavbarComponent,
    CardComponent,
    PostViewComponent,
    DisplayCardComponent,
    ReplyViewComponent,
    PostStatusComponent,
    NavbarComponent,
    DashboardComponent,
    UiLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    DeviceDetectorModule.forRoot(),
    ReactiveFormsModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
