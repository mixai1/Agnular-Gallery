import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { cwd } from 'process';
import { GalleryImage } from '../models/galleryImages.model';
import { Upload } from '../models/upload';

@Injectable()
export class UploadService {

  private basePath: string = '/uploads';
  //private uploads: FirebaseListObservable<GalleryImage[]>;
  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase) { }

  uploadFileSevice(upload: Upload) {
    const storageRef = firebase.storage().ref();
    const putUploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`)
      .put(upload.file);

    putUploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        upload.progress = (putUploadTask.snapshot.bytesTransferred / putUploadTask.snapshot.totalBytes) * 100;
        console.log(upload.progress)
      },
      (erro) => {
        console.log(erro);
      },

      (): any => {
        upload.url = putUploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        //console.log("URL " + upload.url)
        this.saveFile(upload);
      }
    );
  }
  private saveFile(upload: Upload) {
    this.db.list(`${this.basePath}/`).push(upload);
    console.log(upload);
  }
}
