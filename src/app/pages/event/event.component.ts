import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService, SeoService } from 'src/services';

import { environment } from '@env'
import { Utils } from '../../utils'
import _ from 'lodash'
import { RegEventComponent } from 'src/app/dialogs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  constructor(seo: SeoService, route: ActivatedRoute, private modal: ModalService) {
    seo.set('Thông tin sự kiện')
    route.data.subscribe((data) => {
      this.post = _.get(data, 'post');
    })
  }

  post: any

  register() {
    var modal = this.modal.shown(RegEventComponent)
    modal.componentInstance.post = this.post
    console.log(modal.componentInstance.post)
  }

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
