import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userName: string;
  public clientID = environment.clientID;
  public clientSecret = environment.clientSecret;
  public key = environment.apiKey;

  constructor(private http: HttpClient) {
    console.log("service up and go!!!");
    this.userName = '';
  }

  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" +
      this.clientID + "&client_secret=" + this.clientSecret)
  //   return this.http.get("https://api.github.com/users/"+this.userName+"?client_id="+
  //   this.key)
  }

  getUserRepos() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" +
      this.clientID + "&client_secret=" + this.clientSecret)
    // return this.http.get("https://api.github.com/users/"+this.userName+"/repos?client_id="+
    // this.key)
  }

  searchUsername(username: any) {
    this.userName = username;
  }

}