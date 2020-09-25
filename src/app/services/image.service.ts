import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { auth } from 'firebase';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImages.model';

@Injectable()
export class ImageService {

  private uid: string;

  constructor(private afAuten: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuten.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(): any{
    return this.db.list('uploads');
  }
}
