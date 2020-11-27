import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/services';
import _ from 'lodash';
import { environment } from '@env';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  constructor(seo: SeoService, route: ActivatedRoute, router: Router) {
    seo.set('Thông tin sự kiện')
    this.post = _.get(route.snapshot.data, 'post');
    console.log(this.post);
  }

  post: any;

  download() {
    let url = _.get(this.post, 'url')
    const link = `${environment.api_url}/${url}`
    console.log('download from', link)
  }
}
