import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import _ from 'lodash';
import { environment } from '@env'
import { Utils } from '../../utils'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  constructor(seo: SeoService, route: ActivatedRoute) {
    seo.set('Chi tiết bài viết')
    this.post = _.get(route.snapshot.data, 'post');
  }

  post: any

  download() {
    let url = _.get(this.post, 'url')
    const link = `${environment.api_url}/${url}`
    window.open(link)
  }

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
