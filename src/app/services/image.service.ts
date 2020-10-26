import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import 'firebase/storage';

@Injectable()
export class ImageService {


  constructor(private afAuten: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuten.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
      }
    });
  }

  getImages(): any {
    return this.db.list('uploads');
  }

  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
      .then((sanp) => sanp.val())
  }
}
