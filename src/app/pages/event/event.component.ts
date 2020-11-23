import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  constructor(seo: SeoService) {
    seo.set('Thông tin sự kiện')
  }
}
