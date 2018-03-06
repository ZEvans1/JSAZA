import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { ArtistService } from './../services/artist.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artists;
  constructor(private authService: AuthService, private artistService: ArtistService) {

  }

  ngOnInit() {
    this.artists = this.artistService.getAll();
  }

}
