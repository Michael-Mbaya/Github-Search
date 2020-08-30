import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import "rxjs";
// import { Observable } from 'rxjs';
    //map is old version
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private userName:string;
private clientID = environment.clientID;
private clientSecret = environment.clientSecret;
private key = environment.apiKey;

  constructor(private http:HttpClient) {
    console.log("service up and go!!!");
    this.userName = '';
    // this.userName = 'rere'; //user with 0 public repos
    // this.userName = 'samwe';  //user with 0 public repos 2
   }

   getUserInfo(){
    return this.http.get("https://api.github.com/users/"+this.userName+"?client_id="+
    this.clientID+"&client_secret="+this.clientSecret)
    // return this.http.get("https://api.github.com/users/"+this.userName+"?client_id="+
    // this.key)
  }

  getUserRepos(){
    return this.http.get("https://api.github.com/users/"+this.userName+"/repos?client_id="+
    this.clientID+"&client_secret="+this.clientSecret)
    // return this.http.get("https://api.github.com/users/"+this.userName+"/repos?client_id="+
    // this.key)
  }

  searchUsername(username: any) {
    this.userName = username;
  }

}