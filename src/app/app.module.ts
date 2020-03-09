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

@NgModule({
  declarations: [
    AppComponent,
    WelcomeJumboComponent,
    LoginInPartialComponent,
    SearchPartialComponent,
    CaregoryPartialComponent,
    LineDividerComponent,
    PartsSectionComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
