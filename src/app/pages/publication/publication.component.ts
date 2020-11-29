import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import _ from 'lodash';
import { environment } from '@env';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {
  constructor(seo: SeoService, route: ActivatedRoute) {
    seo.set('Thông tin xuất bản')
    this.post = _.get(route.snapshot.data, 'post');
  }

  post: any

  download() {
    let url = _.get(this.post, 'url')
    const link = `${environment.api_url}/${url}`
    window.open(link)
  }
}
