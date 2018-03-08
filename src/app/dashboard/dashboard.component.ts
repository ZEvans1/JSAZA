import { Component, OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService } from './../services/artist.service';
import { GroupService } from './../services/group.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { MaterializeAction } from 'angular2-materialize';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	providers: [ArtistService, GroupService, AuthService]
})

export class DashboardComponent implements OnInit, AfterViewInit {
	artistToDisplay;
	artistId;
	myDate: Date;
	messageIds:string[];
	messageUsers;
	modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }

	constructor(private authService: AuthService, private artistService: ArtistService, private groupService: GroupService, private route: ActivatedRoute) { }

	ngOnInit() {
		if( window.localStorage ) {
			if( !localStorage.getItem('firstLoad') )
			{
				localStorage['firstLoad'] = true;
				window.location.reload();
			}
			else
				localStorage.removeItem('firstLoad');
		}
		this.myDate = new Date();
		this.route.params.forEach((urlParameters) => {
      this.artistId = urlParameters['id'];
		});
		this.artistService.getArtistById(this.artistId).subscribe(dataLastEmmited => {
			this.artistToDisplay = dataLastEmmited;
			// console.log(this.artistToDisplay);
		});
	}

	ngAfterViewInit() {

	}

	getMessageName(uid) {
		let name: string;
		this.artistService.getArtistById(uid).subscribe(dataLastEmmited => {
			name = dataLastEmmited.name;
			// console.log(name);
		})
		return name;
	}

	sendMessage(message) {
		let that = this;
    this.artistToDisplay.messages.push(
      {
        content: message,
        senderId: that.authService.userDetails.uid,
        timestamp: that.myDate.toString()
      });
    this.artistService.updateArtist(this.artistToDisplay);
    // console.log(this.artistToDisplay.messages);
  }

}
