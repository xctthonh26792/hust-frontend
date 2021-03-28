import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SeoService } from 'src/services';
import _ from 'lodash'
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.scss']
})
export class SearchCategoryComponent {

  constructor(private router: Router, private route: ActivatedRoute, seo: SeoService) {
    this.datas = _.get(this.route.snapshot.data, 'datas');
  }
  datas: Array<any>;

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }

  navigate_to(value: any) {
    if (_.get(value, 'type') === 1) {
      this.router.navigateByUrl(`/tin-tuc/bai-viet/${this.seo(_.get(value, 'title'), _.get(value, 'def_code'))}`);
    }
    if (_.get(value, 'type') === 2) {
      this.router.navigateByUrl(`/du-an/bai-viet/${this.seo(_.get(value, 'title'), _.get(value, 'def_code'))}`);
    }
    if (_.get(value, 'type') === 3) {
      this.router.navigateByUrl(`/xuat-ban/bai-viet/${this.seo(_.get(value, 'title'), _.get(value, 'def_code'))}`);
    }
  }
}
