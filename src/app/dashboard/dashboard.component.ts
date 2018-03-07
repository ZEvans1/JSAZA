import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService } from './../services/artist.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [ArtistService, AuthService]
})

export class DashboardComponent implements OnInit {
artistToDisplay;
artistId;

	constructor(private authService: AuthService, private artistService: ArtistService, private route: ActivatedRoute) { }

	ngOnInit() {
		this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
	});
	this.artistService.getArtistById(this.artistId).subscribe(dataLastEmmited => {
		this.artistToDisplay = dataLastEmmited;
		console.log(this.artistToDisplay)
	})
}
  button() {
    console.log()
  }

}
