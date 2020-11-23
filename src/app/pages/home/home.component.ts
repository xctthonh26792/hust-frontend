import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(seo: SeoService) {
    seo.set('Trang chủ')
  }
}
