import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

	user: Observable<firebase.User>;
	userDetails: firebase.User = null;

	constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
		this.user = _firebaseAuth.authState;

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
		return this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
	}

	signInRegular(email, password) {
		const credential = firebase.auth.EmailAuthProvider.credential(email, password);
		return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
	}

	signInWithGoogle() {
		return this._firebaseAuth.auth.signInWithPopup(
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
		this._firebaseAuth.auth.signOut()
			.then((res) => this.router.navigate(['/']));
	}
}
	// Returns true if user is logged in
// 	get authenticated(): boolean {
// 		// consider changing to 'return this.userDetails != null'
// 		if (this.userDetails == null) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}
//
// 	// Returns current user UID
// 	get currentUserId(): string {
// 		return this.authenticated ? this.userDetails.uid : '';
// 	}
//
// 	// Returns current user display name or Guest
// 	get currentUserDisplayName(): string {
// 		return this.userDetails.displayName || this.userDetails.email;
// 	}
// }
//
// // hg {gc: "goober@prat.com", jd: "bot", providerId: "password"}
// // gc
// // :
// // "goober@prat.com"
// // jd
// // :
// // "bot"
// // provider
// // :
// // "password"
// // providerId
// // :
// // "password"
