import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

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
    this.title.setTitle(`${this._title} - ${this._prefix}`);
  }
}
