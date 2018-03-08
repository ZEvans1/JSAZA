import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService } from './../services/artist.service';
import { GroupService } from './../services/group.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [ArtistService, GroupService, AuthService]
})

export class DashboardComponent implements OnInit {
	artistToDisplay;
	artistId;

	groupToDisplay;
	groupId;

	constructor(private authService: AuthService, private artistService: ArtistService, private groupService: GroupService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
	});
	this.route.params.forEach((urlParameters) => {
		this.groupId = urlParameters['id'];
	});
	this.artistService.getArtistById(this.artistId).subscribe(dataLastEmmited => {
		this.artistToDisplay = dataLastEmmited;
		console.log(this.artistToDisplay)
	})
	this.groupService.getGroupById(this.groupId).subscribe(dataLastEmmited => {
		this.groupToDisplay = dataLastEmmited;
		console.log(this.groupToDisplay)
	})

}
  button() {
    console.log()
  }

}
