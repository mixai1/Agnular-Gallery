import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { Upload } from '../../models/upload';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  fileList: FileList;
  upload: Upload
  constructor(private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  uploadFile(): void {
    const fileToUpLoad = this.fileList;
    const fileIndex = _.range(fileToUpLoad.length);
    console.log(_.range(fileToUpLoad.length));

    _.each(fileIndex, (indx) => {
      console.log(fileToUpLoad[indx]);
      this.upload = new Upload(fileToUpLoad[indx]);
      this.uploadService.uploadFileSevice(this.upload);
    });
  }
  hendleFile(event): void {
    this.fileList = event.target.files;
  }

}
