import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { SeoService } from './seo.service';
import { StorageService } from './storage.service';
import { LocalizeService } from './localize.service';
import { ModalService } from './modal.service';
import { ToastrService } from './toastr.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModalModule,
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
        ModalService,
        ToastrService,
      ]
    };
  }
}
