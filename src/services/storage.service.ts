import { Injectable } from '@angular/core';
import ls from 'secure-ls';

@Injectable()
export class StorageService {
  private storage: ls;
  constructor() {
    this.storage = new ls({ encodingType: 'aes' });
  }

  resolve(key: string, value?: any): string | number | Object {
    if (value) {
      this.storage.set(key, value);
    }
    return this.storage.get(key);
  }

  remove(key: string) {
    this.storage.remove(key);
  }
}
