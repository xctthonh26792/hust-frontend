import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ServicesModule } from '../services'
import { PIPES } from '../pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { COMPONENTS } from './components';
import { PAGES } from './pages';


@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...PAGES,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
