import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../app/utils';

@Pipe({ name: 'isStringEmpty', pure: false })
export class IsStringEmpty implements PipeTransform {
  transform(value: string) {
    return Utils.isStringEmpty(value);
  }
}
@Pipe({ name: 'isStringNotEmpty', pure: false })
export class IsStringNotEmpty implements PipeTransform {
  transform(value: string) {
    return Utils.isStringNotEmpty(value);
  }
}

@Pipe({ name: 'isArrayEmpty', pure: false })
export class IsArrayEmpty implements PipeTransform {
  transform(value: Array<any>) {
    return Utils.isArrayEmpty(value);
  }
}

@Pipe({ name: 'isArrayNotEmpty', pure: false })
export class IsArrayNotEmpty implements PipeTransform {
  transform(value: Array<any>) {
    return Utils.isArrayNotEmpty(value);
  }
}
