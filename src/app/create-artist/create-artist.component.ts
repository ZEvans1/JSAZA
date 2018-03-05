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

  submitForm(newName: string, newEmail: string, newPassword: string, newLocation: string, newInstruments: string[], newGenres: string[], newBio: string, newLookingFor: string[], newAvailable: boolean, newCurrentGroups: string[], newFormerGroups: string[]) {
    this.authService.createAccount(newEmail, newPassword);
    let that = this;
    let newArtist = new Artist(newName, newLocation, newInstruments, newGenres, newBio, newLookingFor, newAvailable, newCurrentGroups, newFormerGroups)
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
