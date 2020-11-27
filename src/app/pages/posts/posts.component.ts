import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import _ from 'lodash'
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Tin tức')
    this.posts = _.get(route.snapshot.data, 'posts.models') || [];
    this.count = _.get(route.snapshot.data, 'posts.count') || 0;
    console.log(this)
  }

  posts: Array<any>
  count: number

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
