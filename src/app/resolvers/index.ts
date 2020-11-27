import { MenuResolve, BannerResolve } from './menu.resolver';
import { PublicationPostResolve, PublicationPostsResolve } from './publication.resolver';
import { EventPostResolve, EventPostsResolve, EventHomeDataResolve } from './event.resolver';
import { NewsPostResolve, NewsPostsResolve } from './news.resolver';
import { ProjectPostResolve, ProjectPostsResolve } from './project.resolver';

export { MenuResolve, BannerResolve } from './menu.resolver';
export { PublicationPostResolve, PublicationPostsResolve } from './publication.resolver';
export { EventPostResolve, EventPostsResolve, EventHomeDataResolve } from './event.resolver';
export { NewsPostResolve, NewsPostsResolve } from './news.resolver';
export { ProjectPostResolve, ProjectPostsResolve } from './project.resolver';

export const RESOLVERS = [
  MenuResolve,
  PublicationPostResolve,
  PublicationPostsResolve,
  EventPostResolve,
  EventPostsResolve,
  EventHomeDataResolve,
  NewsPostResolve,
  NewsPostsResolve,
  BannerResolve,
  ProjectPostResolve,
  ProjectPostsResolve,
];
