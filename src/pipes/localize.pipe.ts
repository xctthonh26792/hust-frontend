import { Host, Optional, Pipe, PipeTransform, SkipSelf } from '@angular/core';
import { LocalizeProvider } from 'src/providers';

@Pipe({ name: 'loc', pure: false })
export class LocalizePipe implements PipeTransform {
  constructor(@Host() @SkipSelf() @Optional() private provider: LocalizeProvider) {

  }
  transform(value: string, service: LocalizeProvider) {
    let provider = service || this.provider
    if (provider !== null && provider !== undefined) {
      return provider.get(value)
    }
    return value;
  }
}
