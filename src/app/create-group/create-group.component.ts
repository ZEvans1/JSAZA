import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService} from './../services/artist.service';
import { Artist } from './../artist.model';
import { Router } from '@angular/router';
import { Group } from './../group.model';
import { GroupService } from "./../services/group.service";

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css'],
  providers: [
    AuthService,
    ArtistService,
    GroupService
  ]
})
export class CreateGroupComponent implements OnInit {

  genres: string[] = [];
  currentGenre: string = "";

  allLookingFor: string[] = [];
  currentLookingFor: string = "";

  members: string[] = [];
  currentMember: string = "";

  constructor(private router: Router, private authService: AuthService, private groupService: GroupService) { }

  ngOnInit() {
  }

  addNewMember(member) {
    this.members.push(member);
  }

  addNewGenre(genre) {
    this.genres.push(genre);
  }

  addNewLookingFor(lookingFor) {
    this.allLookingFor.push(lookingFor);
  }

  submitForm(newName: string, newEmail: string, newPassword: string, newCity: string, newState: string, newZip: string, newTagline: string, newBio: string, newAvailable: boolean, newProfileImg: string, newGalleryURL1: string, newGalleryURL2: string, newGalleryURL3: string) {
    this.authService.createAccount(newEmail, newPassword);
    let location = {
      city: newCity,
      state: newState,
      zip: newZip
    };
    let that = this;
    let newGroup = new Group(newName, location, this.genres, this.members, newTagline, newBio, this.allLookingFor, newAvailable);
    newGroup.profileImage = newProfileImg;
    newGroup.gallery = [newGalleryURL1, newGalleryURL2, newGalleryURL3];
    setTimeout(function() {
      that.groupService.addGroup(newGroup, that.authService.userDetails.uid);
      that.router.navigate(['dashboard']);
      }, 2000);
    ;

  }

}
