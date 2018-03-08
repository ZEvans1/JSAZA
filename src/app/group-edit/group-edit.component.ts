import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { GroupService} from './../services/group.service';
import { Group } from './../group.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css'],
  providers: [ AuthService, GroupService]
})
export class GroupEditComponent implements OnInit {


    groupId: string;
    groupToEdit;

    members: string[] = [];
    currentMember: string;

    genres: string[] = [];

    allLookingFor: string[] = [];

    constructor(private router: ActivatedRoute, private normalRoute: Router, private authService: AuthService, private groupService: GroupService) { }

    ngOnInit() {
      this.router.params.forEach((urlParameters) => {
        this.groupId = urlParameters['id'];
  	  });
      this.groupService.getGroupById(this.groupId).subscribe(dataLastEmmited => {
        this.groupToEdit = dataLastEmmited;
      })
    }
    
    addNewMember(member) {
      this.members.push(member);
    }

    submitForm(newName: string, newCity: string, newState: string, newZip: string, newTagline: string, newBio: string, newAvailable: boolean, newProfileImg: string, newGalleryURL1: string, newGalleryURL2: string, newGalleryURL3: string) {
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
        that.groupService.updateGroup(newGroup, that.authService.userDetails.uid);
        that.normalRoute.navigate(['dashboard/' + that.authService.userDetails.uid]);
      }, 1000);
    }

}
