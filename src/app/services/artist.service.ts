import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Artist } from './../artist.model';
import * as firebase from 'firebase';

@Injectable()
export class ArtistService {
  artists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.artists = database.list('artists');
  }

  addArtist(newArtist: Artist, uid: string) {
    newArtist.uid = uid;
    firebase.database().ref('artists/' + uid).set({
      name: newArtist.name,
      location: newArtist.location,
      instruments: newArtist.instruments,
      genres: newArtist.genres,
      bio: newArtist.bio,
      lookingFor: newArtist.lookingFor,
      available: newArtist.available,
      currentGroups: newArtist.currentGroups,
      formerGroups: newArtist.formerGroups
    })
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
