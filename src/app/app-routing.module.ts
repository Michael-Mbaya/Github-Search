import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './page404/page404.component';
// import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component'

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  // { path: 'repos', component: ReposComponent},
  {path: 'about', component: AboutComponent},
  { path:'**', component:Page404Component},
      //redirect
  { path: '', redirectTo:"/about", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
