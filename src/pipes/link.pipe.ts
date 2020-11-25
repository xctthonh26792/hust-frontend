import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env'

@Pipe({ name: 'link', pure: false })
export class LinkPipe implements PipeTransform {
  transform(value: string) {
    if (value === null || value === undefined) {
      return ``
    }
    return `${environment.api_url}/${value}`;
  }
}
