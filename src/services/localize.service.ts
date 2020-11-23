import { EventEmitter, Injectable } from '@angular/core';

import { environment } from '@env';
import { StorageService } from './storage.service';

@Injectable()
export class LocalizeService {
  public lang: string;
  public changed = new EventEmitter();
  constructor(private storage: StorageService) {
    this.lang = <string>storage.resolve('lang') || 'vi'
  }

  set(lang: string) {
    this.lang = <string>this.storage.resolve('lang', lang)
    this.changed.emit()
  }
}
