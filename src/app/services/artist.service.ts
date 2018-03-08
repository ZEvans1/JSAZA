import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Artist } from './../artist.model';
import * as firebase from 'firebase';
import { AuthService } from './../services/auth.service';

@Injectable()
export class ArtistService {
  artists: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private authService: AuthService) {
    this.artists = database.list('artists');
  }

  addArtist(newArtist: Artist, uid: string) {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: newArtist.name,
      photoURL: newArtist.profileImage
    }).then(function() {
      console.log("Display Name set to" + newArtist.name);
    }).catch(function(error) {
      console.log(error);
    })
    firebase.database().ref('artists/' + uid).set({
      name: newArtist.name,
      location: newArtist.location,
      instruments: newArtist.instruments,
      genres: newArtist.genres,
      tagline: newArtist.tagline,
      bio: newArtist.bio,
      lookingFor: newArtist.lookingFor,
      available: newArtist.available,
      groups: newArtist.groups,
      messages: newArtist.messages,
      profileImage: newArtist.profileImage,
      gallery: newArtist.gallery
    })
  }

  getAll() {
    return this.artists;
  }

  getArtistById(artistId: string) {
    return this.database.object('artists/' + artistId);
  }

  updateArtist(localUpdatedArtist) {
    let artistInFirebase = this.getArtistById(localUpdatedArtist.$key);
    artistInFirebase.update({
      name: localUpdatedArtist.name,
      location: localUpdatedArtist.location,
      instruments: localUpdatedArtist.instruments,
      genres: localUpdatedArtist.genres,
      tagline: localUpdatedArtist.tagline,
      bio: localUpdatedArtist.bio,
      lookingFor: localUpdatedArtist.lookingFor,
      available: localUpdatedArtist.available,
      groups: localUpdatedArtist.groups,
      messages: localUpdatedArtist.messages,
      profileImage: localUpdatedArtist.profileImage,
      gallery: localUpdatedArtist.gallery
    })
  }

  deleteArtist(localArtistToDelete) {
    let artistInFirebase = this.getArtistById(localArtistToDelete.id);
    artistInFirebase.remove();
  }

}
