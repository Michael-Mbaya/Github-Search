import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReposComponent } from './repos/repos.component';
import { Page404Component } from './page404/page404.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

import { UserServiceService } from './user-service.service';
import { RepoServiceService } from './repo-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReposComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserServiceService,RepoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
