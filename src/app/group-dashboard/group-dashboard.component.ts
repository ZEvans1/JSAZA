import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService } from './../services/artist.service';
import { GroupService } from './../services/group.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.css']
})
export class GroupDashboardComponent implements OnInit {

  groupToDisplay;
  groupId;

  constructor(private authService: AuthService, private groupService: GroupService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.forEach((urlParameters) => {
      this.groupId = urlParameters['id'];
    });
    this.groupService.getGroupById(this.groupId).subscribe(dataLastEmmited => {
      this.groupToDisplay = dataLastEmmited;
      console.log(this.groupToDisplay);
    });
  }
}
