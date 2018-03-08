import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService } from './../services/artist.service';
import { GroupService } from './../services/group.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MaterializeModule } from 'angular2-materialize';
import * as $ from 'jquery';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [ArtistService, GroupService, AuthService]
})

export class DashboardComponent implements OnInit, AfterViewInit {
	artistToDisplay;
	artistId;
	counter: number = 0;


	constructor(private authService: AuthService, private artistService: ArtistService, private groupService: GroupService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
	});
	this.artistService.getArtistById(this.artistId).subscribe(dataLastEmmited => {
		this.artistToDisplay = dataLastEmmited;
		console.log(this.artistToDisplay)
	});
}

ngAfterViewInit() {

}
  button() {
    console.log()
  }

}
