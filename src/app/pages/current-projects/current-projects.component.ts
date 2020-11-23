import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-current-projects',
  templateUrl: './current-projects.component.html',
  styleUrls: ['./current-projects.component.scss']
})
export class CurrentProjectsComponent {
  constructor(seo: SeoService) {
    seo.set('Dự án hiện tại')
  }
}
