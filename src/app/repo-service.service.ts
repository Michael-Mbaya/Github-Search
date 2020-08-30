import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// https://api.github.com/search/repositories?q=topic:
export class RepoServiceService {

  private repoName: string;
  private clientID = environment.clientID;
  private clientSecret = environment.clientSecret;
  private key = environment.apiKey;

  constructor(private http: HttpClient) {
    console.log("service up and go!!!");
    this.repoName = 'akan';
  }

  getRepos() {
    return this.http.get("https://api.github.com/search/repositories?q=topic:" + this.repoName+ "&client_id=" +
      this.clientID + "&client_secret=" + this.clientSecret+"&per_page=10")
  }

}
