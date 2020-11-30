import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

import _ from 'lodash'
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Danh sách dự án')
    this.route.data.subscribe((data) => {
      this.posts = _.get(data, 'posts.models') || [];
      this.count = _.get(data, 'posts.count') || 0;
      this.childs = _.get(data, 'posts.extras.childs') || [];
      this.clength = _.size(this.childs)
    })
  }

  posts: Array<any>
  count: number;
  childs: Array<any>
  clength: number;

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }
}
