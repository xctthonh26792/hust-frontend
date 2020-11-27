import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  EventsComponent,
  EventComponent,
  PublicationsComponent,
  PublicationComponent,
  ProjectsComponent,
  ProjectComponent,
  CurrentProjectsComponent,
  PostsComponent,
  PostComponent,
  ContactComponent,
  ContainerComponent,
} from './pages';
import { MenuResolve, PublicationPostResolve, BannerResolve, EventPostsResolve, PublicationPostsResolve, ProjectPostsResolve, ProjectPostResolve } from './resolvers';
import { EventPostResolve, EventHomeDataResolve } from './resolvers/event.resolver';
import { NewsPostResolve, NewsPostsResolve } from './resolvers/news.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    resolve: {
      menu: MenuResolve,
      data: BannerResolve,
      events: EventHomeDataResolve,
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'su-kien',
        component: EventsComponent,
        resolve: {
          posts: EventPostsResolve
        }
      },
      {
        path: 'su-kien/:code',
        component: EventsComponent,
        resolve: {
          posts: EventPostsResolve
        }
      },
      {
        path: 'su-kien/bai-viet/:code',
        component: EventComponent,
        resolve: {
          post: EventPostResolve
        }
      },
      {
        path: 'xuat-ban',
        component: PublicationsComponent,
        resolve: {
          posts: PublicationPostsResolve
        }
      },
      {
        path: 'xuat-ban/:code',
        component: PublicationsComponent,
        resolve: {
          posts: PublicationPostsResolve
        }
      },
      {
        path: 'xuat-ban/bai-viet/:code',
        component: PublicationComponent,
        resolve: {
          post: PublicationPostResolve
        }
      },
      {
        path: 'du-an',
        component: ProjectsComponent,
        resolve: {
          posts: ProjectPostsResolve
        }
      },
      {
        path: 'du-an/:code',
        component: ProjectsComponent,
        resolve: {
          posts: ProjectPostsResolve
        }
      },
      {
        path: 'du-an/bai-viet/:code',
        component: ProjectComponent,
        resolve: {
          post: ProjectPostResolve
        }
      },
      {
        path: 'current-projects',
        component: CurrentProjectsComponent
      },
      {
        path: 'tin-tuc',
        component: PostsComponent,
        resolve: {
          posts: NewsPostsResolve
        }
      },
      {
        path: 'tin-tuc/:code',
        component: PostsComponent,
        resolve: {
          posts: NewsPostsResolve
        }
      },
      {
        path: 'tin-tuc/bai-viet/:code',
        component: PostComponent,
        resolve: {
          post: NewsPostResolve
        }
      },
      {
        path: 'lien-he',
        component: ContactComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
