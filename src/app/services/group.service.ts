import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Artist } from './../artist.model';
import { Group } from './../group.model';
import * as firebase from 'firebase';
import { AuthService } from './../services/auth.service';


@Injectable()
export class GroupService {
  groups: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase, private authService: AuthService) {


    this.groups = database.list('groups');
  }

  addGroup(newGroup: Group, id: string) {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: newGroup.name,
      photoURL: newGroup.profileImage
    }).then(function() {
      console.log("Display Name set to" + newGroup.name);
    }).catch(function(error) {
      console.log(error);
    })
    firebase.database().ref('groups/' + id).set({
      name: newGroup.name,
      location: newGroup.location,
      genre: newGroup.genre,
      members: newGroup.members,
      tagline: newGroup.tagline,
      bio: newGroup.bio,
      lookingFor: newGroup.lookingFor,
      available: newGroup.available,
      messages: newGroup.messages,
      profileImage: newGroup.profileImage,
      gallery: newGroup.gallery
    })
  }

  getAll() {
    return this.groups;
  }

  getGroupById(groupId: string) {
    return this.database.object('groups/' + groupId);
  }

  updateGroup(localUpdatedGroup) {
    let groupInFirebase = this.getGroupById(localUpdatedGroup.$key);
    groupInFirebase.update({
      name: localUpdatedGroup.name,
      location: localUpdatedGroup.location,
      genre: localUpdatedGroup.genre,
      members: localUpdatedGroup.members,
      tagline: localUpdatedGroup.tagline,
      bio: localUpdatedGroup.bio,
      lookingFor: localUpdatedGroup.lookingFor,
      available: localUpdatedGroup.available,
      messages: localUpdatedGroup.messages,
      profileImage: localUpdatedGroup.profileImage,
      gallery: localUpdatedGroup.gallery
    })
  }

  deleteGroup(localGroupToDelete) {
    let groupInFirebase = this.getGroupById(localGroupToDelete.id);
    groupInFirebase.remove();
  }

}
