import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/services';

import _ from 'lodash'
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  constructor(seo: SeoService, private route: ActivatedRoute, private router: Router) {
    seo.set('Tin tức')
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
}
