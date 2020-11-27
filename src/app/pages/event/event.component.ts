import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import { environment } from '@env'
import { Utils } from '../../utils'
import _ from 'lodash'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  constructor(seo: SeoService, route: ActivatedRoute) {
    seo.set('Thông tin sự kiện')
    this.post = _.get(route.snapshot.data, 'post');
    console.log(this)
  }

  post: any

  download() {
    let url = _.get(this.post, 'url')
    const link = `${environment.api_url}/${url}`
    console.log('download from', link)
  }

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
