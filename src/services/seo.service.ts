import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

import _ from 'lodash';

@Injectable()
export class SeoService {
  _prefix: string;
  _title: string
  constructor(private title: Title) {
  }

  prefix(value: string) {
    this._prefix = value;
    this.show();
    return this;
  }

  set(title: string) {
    this._title = title;
    this.show();
    return this;
  }

  private show() {
    if (this._title === null || this._title === undefined || this._title === '') {
      this.title.setTitle(`${this._prefix}`);
      return; 
    }
    this.title.setTitle(`${this._title} - ${this._prefix}`);
  }
}
