import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent {
  constructor(seo: SeoService) {
    seo.set('Thông tin xuất bản')
  }
}
