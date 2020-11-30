import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocalizeService, SeoService } from 'src/services';
import { ToastrService } from 'src/services';

const PREFIX = {
  vi: 'Viện khoa học & Công nghệ môi trường',
  en: 'School of Enviromental science and technology'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private seo: SeoService, private localize: LocalizeService, public toastr: ToastrService) {
    this.seo.prefix(PREFIX[this.localize.lang])
  }

  ngOnInit() {
    this.localize.changed.subscribe(() => {
      this.seo.prefix(PREFIX[this.localize.lang])
    })
  }

  ngOnDestroy() {
    this.localize.changed.unsubscribe();
  }
}
