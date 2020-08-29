import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

profile:any[];

  constructor(private userService:UserServiceService) {
    this.userService.getUserInfo().subscribe(profileResult => console.log(profileResult));
    this.profile = this.profile;
   }

  ngOnInit(): void {
  }

}
