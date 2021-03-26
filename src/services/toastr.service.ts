import { Injectable } from '@angular/core';

@Injectable()
export class ToastrService {
  public messages: any[] = [];

  success(message: string) {
    this.messages.push({ message, classname: 'bg-success' });
  }

  error(message: string) {
    this.messages.push({message, classname: 'bg-error'});
  }

  remove(toast) {
    this.messages = this.messages.filter(t => t != toast);
  }
}
