import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService} from './../services/artist.service';
import { Artist } from './../artist.model';
import { Router } from '@angular/router';
import {MaterializeDirective} from "angular2-materialize";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css'],
  providers: [
    AuthService,
    ArtistService
  ]
})
export class CreateArtistComponent implements OnInit {

  instruments: string[] = [];

  genres: string[] = [];

  allLookingFor: string[] = [];

  constructor(private router: Router, private authService: AuthService, private artistService: ArtistService) { }

  ngOnInit() {

  }

  submitForm(newName: string, newEmail: string, newPassword: string, newCity: string, newState: string, newZip: string, newTagline: string, newBio: string, newAvailable: boolean, newGroupId: string, newGroupRole: string, newGroupStartDate: string, newGroupEndDate: string, newProfileImg: string, newGalleryURL1: string, newGalleryURL2: string, newGalleryURL3: string) {
    this.authService.createAccount(newEmail, newPassword);
    let location = {
      city: newCity,
      state: newState,
      zip: newZip
    };
    let groups = [{
      name: newGroupId,
      role: newGroupRole,
      startDate: newGroupStartDate,
      endDate: newGroupEndDate,
      verified: false
    }]
    let that = this;
    let newArtist = new Artist(newName, location, this.instruments, this.genres, newTagline, newBio, this.allLookingFor, newAvailable, groups);
    newArtist.profileImage = newProfileImg;
    newArtist.gallery = [newGalleryURL1, newGalleryURL2, newGalleryURL3];
    setTimeout(function() {
      that.artistService.addArtist(newArtist, that.authService.userDetails.uid);
      that.router.navigate(['dashboard/' + this.authService.userDetails.uid]);
      }, 2000);
    ;

  }
  testFunc() {
    let that = this;
    setTimeout(function() {console.log(that.authService.userDetails.uid)}, 1000);
  }

  instrumentOptions = [
    {value: "acoustic-guitar", name:"acoustic-guitar"},
    {value: "alto-sax", name:"alto-sax"},
    {value: "banjo", name:"banjo"},
    {value: "bari-sax", name:"bari-sax"},
    {value: "bass", name:"bass"},
    {value: "bongos", name:"bongos"},
    {value: "cello", name:"cello"},
    {value: "jd", name:"jd"},
    {value: "double-bass", name:"double-bass"},
    {value: "drums", name:"drums"},
    {value: "electric-bass", name:"electric-bass"},
    {value: "electric-guitar", name:"electric-guitar"},
    {value: "guitar", name:"guitar"},
    {value: "keyboard", name:"keyboard"},
    {value: "mastering", name:"mastering"},
    {value: "mixing", name:"mixing"},
    {value: "piano", name:"piano"},
    {value: "post-production", name:"post-production"},
    {value: "production", name:"production"},
    {value: "soprano-sax", name:"soprano-sax"},
    {value: "sound-engineer", name:"sound-engineer"},
    {value: "synthesizer", name:"synthesizer"},
    {value: "tenor-sax", name:"tenor-sax"},
    {value: "trombone", name:"trombone"},
    {value: "viola", name:"viola"},
    {value: "violin", name:"violin"},
    {value: "vocals", name:"vocals"}
  ];

}
