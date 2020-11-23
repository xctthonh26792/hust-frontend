import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(seo: SeoService) {
    seo.set('Liên hệ')
  }
}
