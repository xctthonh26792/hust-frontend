import { MenuResolve, BannerResolve } from './menu.resolver';
import { PublicationPostResolve } from './publication.resolver';
import { EventPostResolve } from './event.resolver';
import { NewsPostResolve } from './news.resolver';

export { MenuResolve, BannerResolve } from './menu.resolver';
export { PublicationPostResolve } from './publication.resolver';
export { EventPostResolve } from './event.resolver';
export { NewsPostResolve } from './news.resolver';

export const RESOLVERS = [
  MenuResolve,
  PublicationPostResolve,
  EventPostResolve,
  NewsPostResolve,
  BannerResolve
];
