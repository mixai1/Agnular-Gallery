import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { Observable } from 'rxjs';
import { GalleryImage } from '../../models/galleryImages.model';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnChanges {

  images: Observable<GalleryImage[]>;
  constructor(private imageServise: ImageService) { }

  ngOnChanges(): void {
    this.images = this.imageServise.getImages();
  }

  ngOnInit(): void {
    this.images = this.imageServise.getImages();
  }

}
