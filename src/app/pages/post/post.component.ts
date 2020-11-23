import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(seo: SeoService) {
    seo.set('Chi tiết bài viết')
  }
}
