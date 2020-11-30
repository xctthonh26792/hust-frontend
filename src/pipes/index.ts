import { LocalizePipe } from './localize.pipe';
import { LinkPipe } from './link.pipe';
import {
  IsArrayEmpty,
  IsArrayNotEmpty,
  IsStringEmpty,
  IsStringNotEmpty
} from './checking.pipe';

export { LocalizePipe } from './localize.pipe';
export { LinkPipe } from './link.pipe';
export {
  IsArrayEmpty,
  IsArrayNotEmpty,
  IsStringEmpty,
  IsStringNotEmpty
} from './checking.pipe';

export const PIPES = [
  LocalizePipe,
  LinkPipe,
  IsArrayEmpty,
  IsArrayNotEmpty,
  IsStringEmpty,
  IsStringNotEmpty,
]