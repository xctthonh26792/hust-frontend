import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from 'src/services';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  constructor(seo: SeoService, private route: ActivatedRoute) {
    seo.set('Thông tin dự án')
    console.log(this)
  }
}
