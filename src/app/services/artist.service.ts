import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Artist } from './../artist.model';

@Injectable()
export class ArtistService {
  artists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.artists = database.list('artists');
  }

  addArtist(newArtist: Artist, id: String) {
    // newArtist.id = id;
    this.artists.push(newArtist)
  }

  getAll() {
    return this.artists;
  }

  getArtistById(artistId: string) {
    return this.database.object('artists/' + artistId);
  }

  updateArtist(localUpdatedArtist) {
    let artistInFirebase = this.getArtistById(localUpdatedArtist.id);
    artistInFirebase.update({
      //all properties!
    })
  }

  deleteArtist(localArtistToDelete) {
    let artistInFirebase = this.getArtistById(localArtistToDelete.id);
    artistInFirebase.remove();
  }

}
