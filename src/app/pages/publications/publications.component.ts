import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import _ from 'lodash'
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Danh sách xuất bản')
    route.data.subscribe((data) => {
      this.posts = _.get(data, 'posts.models') || [];
      this.count = _.get(data, 'posts.count') || 0;
    })
  }

  posts: Array<any>
  count: number

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
