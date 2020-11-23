import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor(seo: SeoService) {
    seo.set('Danh sách dự án')
  }
}
