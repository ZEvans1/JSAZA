import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Artist } from '../artist.model';
import { ArtistService } from '../services/artist.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  @Input() artistToMessage: Artist;
  @Output() addMessageSender = new EventEmitter();
  artistId: string;
  artistToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private artistService: ArtistService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.artistId = urlParametersArray['id'];
   });
   this.artistService.getArtistById(this.artistId).subscribe(dataLastEmittedFromObserver => {
     this.artistToDisplay = dataLastEmittedFromObserver;
     console.log(this.artistToDisplay);
   })
  }

  sendPrivateMessage(message) {
    this.artistToDisplay.messages.push(
      {
        content: message,
        senderId: this.authService.userDetails.uid
      });
    this.artistService.updateArtist(this.artistToDisplay);
    console.log(this.artistToDisplay.messages);
  }

}
