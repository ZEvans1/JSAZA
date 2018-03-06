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



  constructor(private router: Router, private authService: AuthService, private artistService: ArtistService) { }

  ngOnInit() {
  }

  submitForm(newName: string, newEmail: string, newPassword: string, newStreet: string, newCity: string, newState: string, newZip: string, newInstrument1: string, newInstrument2: string, newInstrument3: string, newGenre1: string, newGenre2: string, newGenre3: string, newBio: string, newLookingFor: string[], newAvailable: boolean, newGroupId: string, newGroupRole: string, newGroupStartDate: string, newGroupEndDate: string, newProfileImg: string, newGalleryURL1: string, newGalleryURL2: string, newGalleryURL3: string) {
    this.authService.createAccount(newEmail, newPassword);
    let location = {
      city: newCity,
      state: newState,
      zip: newZip
    };
    let instruments =[newInstrument1, newInstrument2, newInstrument3];
    let genres = [newGenre1, newGenre2, newGenre3];
    let groups = {
      name: newGroupId,
      role: newGroupRole,
      startDate: newGroupStartDate,
      endDate: newGroupEndDate,
      verified: false
    }
    let that = this;
    let newArtist = new Artist(newName, location, instruments, genres, newBio, newLookingFor, newAvailable, groups);
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
