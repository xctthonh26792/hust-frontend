import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import { environment } from '@env'
import _ from 'lodash'
import { Utils } from '../../utils';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Thông tin dự án')
    this.post = _.get(route.snapshot.data, 'post');
  }

  post: any

  download() {
    let url = _.get(this.post, 'url')
    const link = `${environment.api_url}/${url}`
  }

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
