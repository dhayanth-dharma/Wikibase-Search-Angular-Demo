
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './../const/object.model';
@Injectable({ providedIn: 'root' })
export class FirebaseServiceService {
  constructor(private angularFirestore: AngularFirestore) { }

  click() {
    console.log("clicked");
  }
  getUser() {
    return this.angularFirestore.collection('userData').snapshotChanges();
  }
  // createUser(user: User) {
  //   return this.angularFirestore.collection('userData').add(user);
  // }
}
