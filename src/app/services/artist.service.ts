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
    newArtist.uid = uid;
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
      bio: newArtist.bio,
      lookingFor: newArtist.lookingFor,
      available: newArtist.available,
      currentGroups: newArtist.currentGroups,
      formerGroups: newArtist.formerGroups,
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
