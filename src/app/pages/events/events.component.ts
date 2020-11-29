import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';
import { SubscribeActionComponent } from '../subscribe.action/subscribe.action.component';
import _ from 'lodash';
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Sự kiện')
    this.posts = _.get(route.snapshot.data, 'posts.models') || [];
    this.count = _.get(route.snapshot.data, 'posts.count') || 0;
  }

  posts: Array<any>
  count: number

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }

}
