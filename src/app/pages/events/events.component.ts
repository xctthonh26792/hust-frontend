import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService, SeoService } from 'src/services';
import _ from 'lodash';
import { Utils } from 'src/app/utils';
import { RegEventComponent } from 'src/app/dialogs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  constructor(seo: SeoService, private modal: ModalService, private route: ActivatedRoute, private router: Router) {
    seo.set('Sự kiện')
    route.data.subscribe((data) => {
      this.posts = _.get(data, 'posts.models') || [];
      this.count = _.get(data, 'posts.count') || 0;
    })
    route.queryParamMap.subscribe((map) => {
      this.page = +map.get('p') || 1
    })
  }

  page: number
  changed($event: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { p: $event },
      queryParamsHandling: 'merge'
    })
  }


  posts: Array<any>
  count: number

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }

  register(post) {
    var modal = this.modal.shown(RegEventComponent)
    modal.componentInstance.post = post
  }
}
