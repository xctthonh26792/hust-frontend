import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import { environment } from '@env'
import _ from 'lodash'
import { Utils } from '../../utils';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Thông tin đào tạo')
    route.data.subscribe((data) => {
      this.post = _.get(data, 'post');
    })

    console.log(this.post)
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
