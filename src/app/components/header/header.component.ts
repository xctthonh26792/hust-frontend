import { Component, Self } from '@angular/core';
import { LocalizeProvider } from 'src/providers';
import { LocalizeService } from 'src/services';
import { LOCALIZE } from './header.lang';
import { NewsCategoryApi } from '../../apis/news-category.api';
import { Router } from '@angular/router'
import { Utils } from 'src/app/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  viewProviders: [LocalizeProvider]
})
export class HeaderComponent {
  constructor(private localize: LocalizeService, @Self() provider: LocalizeProvider, private api: NewsCategoryApi, private router: Router) {
    provider.set(LOCALIZE)
  }

  model: any = {};
  search() {
    // if (this.localize.lang === 'vi') {
    //   this.localize.set('en');
    //   return;
    // }
    // this.localize.set('vi');
    if (Utils.isStringNotEmpty(this.model.keyword)) {
      this.router.navigateByUrl(`/thong-tin-tim-kiem/${Utils.parseToEnglish(this.model.keyword)}`);
      this.model.keyword = '';
    }
  }
}
