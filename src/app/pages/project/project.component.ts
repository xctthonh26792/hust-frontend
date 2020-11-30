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
    route.data.subscribe((data) => {
      this.post = _.get(data, 'post');
    })
  }

  post: any

  download() {
    let url = _.get(this.post, 'url')
    const link = `${environment.api_url}/${url}`
    window.open(link)
  }

  download_source() {
    let url = _.get(this.post, 'source')
    window.open(url)
  }

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
