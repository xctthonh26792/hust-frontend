import { Component, Self } from '@angular/core';
import { LocalizeProvider } from 'src/providers';
import { LocalizeService } from 'src/services';
import { LOCALIZE } from './header.lang';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  viewProviders: [LocalizeProvider]
})
export class HeaderComponent {
  constructor(private localize: LocalizeService, @Self() provider: LocalizeProvider) {
    provider.set(LOCALIZE)
  }

  search() {
    if (this.localize.lang === 'vi') {
      this.localize.set('en');
      return;
    }
    this.localize.set('vi');
  }
}
