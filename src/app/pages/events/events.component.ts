import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  constructor(seo: SeoService) {
    seo.set('Sự kiện')
  }
}
