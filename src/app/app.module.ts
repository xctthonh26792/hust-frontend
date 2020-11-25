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

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...PAGES,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ServicesModule.forRoot(),
    HttpClientModule
  ],
  providers: [...APIS, ...RESOLVERS],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
