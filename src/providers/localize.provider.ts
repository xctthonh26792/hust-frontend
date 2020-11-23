import { Injectable } from "@angular/core";
import { LocalizeService } from 'src/services';

@Injectable()
export class LocalizeProvider {
  private keywords: Localize;
  constructor(private service: LocalizeService) {
    this.keywords = {};
  }

  set(keywords: Localize) {
    this.keywords = keywords;
  }

  get(key: string) {
    let value = this.keywords[key]
    if (value !== null && value !== undefined) {
      return value[this.service.lang] || key;
    }
    return key;
  }
}
