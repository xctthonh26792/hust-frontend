import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  constructor(seo: SeoService) {
    seo.set('Danh sách xuất bản')
  }
}
