import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[''];
  repos:any[''];
  username:any['string'];


  constructor(private profileService:ProfileService) {   
  }

findprofile(){
  this.profileService.updateprofile(this.username);
  this.profileService.getProfileInfo().subscribe(profile => {

  console.log(profile);
  this.profile = profile;
});

this.profileService.getprofileRepos().subscribe(repos => {
  console.log(repos);
  this.repos = repos;
})}

  ngOnInit() {
  }

}
