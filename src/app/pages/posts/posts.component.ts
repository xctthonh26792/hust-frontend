import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(seo: SeoService) {
    seo.set('Tin tức')
  }
}
