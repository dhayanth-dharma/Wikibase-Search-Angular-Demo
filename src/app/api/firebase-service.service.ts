
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IWebPage } from './../const/object.model';
@Injectable({ providedIn: 'root' })
export class FirebaseServiceService {
  private dbPath = '/savedUrls';
  webpagesRef: AngularFirestoreCollection<IWebPage> = null;

  constructor(private angularFirestore: AngularFirestore) {
    this.webpagesRef = angularFirestore.collection(this.dbPath);
  }

  create(webpage: IWebPage): void {
    this.webpagesRef.add({ ...webpage });
  }
  delete(key: string): Promise<void> {
    return this.webpagesRef.doc(key).delete();
  }

  getList(): AngularFirestoreCollection<IWebPage> {
    return this.webpagesRef;
  }

}
