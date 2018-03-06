import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService} from './../services/artist.service';
import { Artist } from './../artist.model';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private authService: AuthService, private artistService: ArtistService) { }

  ngOnInit() {
  }

  addNewInstrument(instrument) {
    this.instruments.push(instrument)
  }

  submitForm(newName: string, newEmail: string, newPassword: string, newStreet: string, newCity: string, newState: string, newZip: string, newGenre1: string, newGenre2: string, newGenre3: string, newBio: string, newLookingFor: string[], newAvailable: boolean, newGroupId: string, newGroupRole: string, newGroupStartDate: string, newGroupEndDate: string, newProfileImg: string, newGalleryURL1: string, newGalleryURL2: string, newGalleryURL3: string) {
    this.authService.createAccount(newEmail, newPassword);
    let location = {
      street: newStreet,
      city: newCity,
      state: newState,
      zip: newZip
    };
    let genres = [newGenre1, newGenre2, newGenre3];
    let groups = {
      groupId: newGroupId,
      role: newGroupRole,
      startDate: newGroupStartDate,
      endDate: newGroupEndDate
    }
    let that = this;
    let newArtist = new Artist(newName, location, this.instruments, genres, newBio, newLookingFor, newAvailable, groups);
    newArtist.profileImage = newProfileImg;
    newArtist.gallery = [newGalleryURL1, newGalleryURL2, newGalleryURL3];
    setTimeout(function() {
      that.artistService.addArtist(newArtist, that.authService.userDetails.uid);
      that.router.navigate(['dashboard']);
      }, 2000);
    ;

  }
  testFunc() {
    let that = this;
    setTimeout(function() {console.log(that.authService.userDetails.uid)}, 1000);
  }

}
