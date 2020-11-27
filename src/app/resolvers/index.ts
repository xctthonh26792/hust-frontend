import { MenuResolve, BannerResolve } from './menu.resolver';
import { PublicationPostResolve, PublicationPostsResolve } from './publication.resolver';
import { EventPostResolve, EventPostsResolve } from './event.resolver';
import { NewsPostResolve, NewsPostsResolve } from './news.resolver';
import { ProjectPostResolve, ProjectPostsResolve } from './project.resolver';

export { MenuResolve, BannerResolve } from './menu.resolver';
export { PublicationPostResolve, PublicationPostsResolve } from './publication.resolver';
export { EventPostResolve, EventPostsResolve } from './event.resolver';
export { NewsPostResolve, NewsPostsResolve } from './news.resolver';
export { ProjectPostResolve, ProjectPostsResolve } from './project.resolver';

export const RESOLVERS = [
  MenuResolve,
  PublicationPostResolve,
  PublicationPostsResolve,
  EventPostResolve,
  EventPostsResolve,
  NewsPostResolve,
  NewsPostsResolve,
  BannerResolve,
  ProjectPostResolve,
  ProjectPostsResolve,
];
