import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

	user: Observable<firebase.User>;
	userDetails: firebase.User = null;

	constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
		this.user = firebaseAuth.authState;

		this.user.subscribe(
			(user) => {
				if (user) {
					this.userDetails = user;
					console.log(this.userDetails);
				}
				else {
					this.userDetails = null;
				}
			}
		);
	}

	createAccount(email, password) {
		const credential = firebase.auth.EmailAuthProvider.credential(email, password);
		return this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
	}

	signInRegular(email, password) {
		const credential = firebase.auth.EmailAuthProvider.credential(email, password);
		return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
	}

	signInWithGoogle() {
		return this.firebaseAuth.auth.signInWithPopup(
			new firebase.auth.GoogleAuthProvider()
		)
	}

	isLoggedIn() {
		if (this.userDetails == null) {
			return false;
		} else {
			return true;
		}
	}

	logout() {
		this.firebaseAuth.auth.signOut()
			.then((res) => this.router.navigate(['/']));
	}
}
