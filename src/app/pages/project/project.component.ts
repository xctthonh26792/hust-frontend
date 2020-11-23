import { Component } from '@angular/core';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  constructor(seo: SeoService) {
    seo.set('Thông tin dự án')
  }
}
