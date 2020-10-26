import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  public imageUrl = '';
  constructor(private imageService: ImageService, private route: ActivatedRoute) { }

  getImageUrl(key: string) {
    this.imageService.getImage(key)
      .then(image => this.imageUrl = image.Url)
  }

  ngOnInit(): void {
    this.getImageUrl(this.route.snapshot.params['id'])
  }

}
