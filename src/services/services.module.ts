import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeoService } from './seo.service';
import { StorageService } from './storage.service';
import { LocalizeService } from './localize.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  entryComponents: []
})
export class ServicesModule {
  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        SeoService,
        StorageService,
        LocalizeService,
      ]
    };
  }
}
