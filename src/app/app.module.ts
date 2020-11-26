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
import { DIRECTIVES } from './directives'
import { APIS } from './apis'
import { RESOLVERS } from './resolvers';

import {
  SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG
} from 'ngx-swiper-wrapper';

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
    ...DIRECTIVES
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    HttpClientModule
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
