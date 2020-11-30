import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {
  public messages: any[] = [];

  success(message: string) {
    this.messages.push({ message, classname: 'bg-success' });
  }

  remove(toast) {
    this.messages = this.messages.filter(t => t != toast);
  }
}
