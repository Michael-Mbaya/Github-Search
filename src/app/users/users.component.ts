import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profile:any;
  repos:any;
  searchname:string;

  constructor(private userService:UserServiceService) {
    
    this.userService.getUserInfo().subscribe(profileResult => {
      console.log(profileResult);
      this.profile = profileResult;
    });

    this.userService.getUserRepos().subscribe(profileReposResult => {
      console.log(profileReposResult);
      this.repos = profileReposResult;

   });
  }

   search() {
    this.userService.searchUsername(this.searchname);

    this.userService.getUserInfo().subscribe(profileResult => {
      console.log(profileResult);
      this.profile = profileResult;
    });

    this.userService.getUserRepos().subscribe(profileReposResult => {
      console.log(profileReposResult);
      this.repos = profileReposResult;

   });
    this.searchname = '';
  }

  ngOnInit() {
  }

}