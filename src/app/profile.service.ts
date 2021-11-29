import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private username:String;
  private clientid='40886f4d8adf55a056da';
  private clientsecret='0ae01bf4472cd8826290fcdb79a3f8f4bc2e5e67';

  constructor(private http:HttpClient,private HttpClientModule:HttpClientModule) {
    console.log("Service is now ready");
    this.username='AdamuWanganya';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client-id=" + this.clientid + "&client-secret=" + this.clientsecret);
  
  }
getprofileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client-id=" + this.clientid + "&client-secret=" + this.clientsecret);

}

}
