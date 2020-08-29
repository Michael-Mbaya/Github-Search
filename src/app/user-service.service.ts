import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
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
    this.userName = 'Michael-Mbaya'; 
   }

   getUserInfo(){
    // return this.http.get("https://api.github.com/users/"+this.userName+"?client_id="+
    // this.clientID+"&client_secret="+this.clientSecret)
    return this.http.get("https://api.github.com/users/"+this.userName+"?client_id="+
    this.key)
    // .map(res => res.json())
    // .subscribe(data=>{
    //   // Succesful API request
    //   // this.quote = new Quote(data.author, data.quote)
    // },err=>{
    //     // this.quote = new Quote("Winston Churchill","Never never give up!")
    //     console.log("An error occurred")
    // })
  }

}
