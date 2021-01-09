import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ServicesModule } from '../services'
import { PIPES } from '../pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { COMPONENTS } from './components';
import { PAGES } from './pages';
import { DIALOGS } from './dialogs';
import { DIRECTIVES } from './directives'
import { APIS } from './apis'
import { RESOLVERS } from './resolvers';

import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DecisionSupportComponent } from './pages/decision-support/decision-support.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: false,
  autoplay: true

};

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...PAGES,
    ...PIPES,
    ...DIRECTIVES,
    ...DIALOGS,
    DecisionSupportComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    HttpClientModule,
    NgbModule
  ],
  providers: [...APIS, ...RESOLVERS, {
    provide: SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
