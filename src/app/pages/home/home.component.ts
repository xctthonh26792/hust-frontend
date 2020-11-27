import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';
import { SwiperOptions } from 'swiper';
import { environment } from '@env';
import _ from 'lodash';
import { Utils } from '../../utils'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true,
    loop: true,
    autoplay: true,
    effect: 'fade'
  };
  constructor(seo: SeoService, private route: ActivatedRoute, private router: Router) {
    seo.set('Trang chủ')
    this.url = environment.api_url;
    this.data = _.get(route.snapshot.data, 'data');
    this.events = _.get(route.snapshot.data, 'events.models');
    console.log(this.events)
  }

  slides: Array<any>;
  data: Array<any>;
  events: Array<any>;
  url: string;

  ngOnInit() {
    this.slides = []
    console.log(_.get(this.data, 'urls'))
    _.forEach(_.get(this.data, 'urls'), x => {
      this.slides.push({
        image: `${this.url}/${x}`,
      })
      console.log(this.slides)
    })
  }

  seo(title: string, code: string) {
    return `${Utils.toSeo(title)}-${code}`
  }

}
