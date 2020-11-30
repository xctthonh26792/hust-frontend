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
    },
    children: [
      {
        path: '',
        component: HomeComponent,
        resolve: {
          data: BannerResolve,
          events: EventHomeDataResolve,
        },
      },
      {
        path: 'su-kien',
        component: EventsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: EventPostsResolve
        }
      },
      {
        path: 'su-kien/:code',
        component: EventsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: EventPostsResolve
        }
      },
      {
        path: 'su-kien/bai-viet/:code',
        runGuardsAndResolvers: 'always',
        component: EventComponent,
        resolve: {
          post: EventPostResolve
        }
      },
      {
        path: 'xuat-ban',
        component: PublicationsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: PublicationPostsResolve
        }
      },
      {
        path: 'xuat-ban/:code',
        component: PublicationsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: PublicationPostsResolve
        }
      },
      {
        path: 'xuat-ban/bai-viet/:code',
        component: PublicationComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          post: PublicationPostResolve
        }
      },
      {
        path: 'du-an',
        component: ProjectsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: ProjectPostsResolve
        }
      },
      {
        path: 'du-an/:code',
        component: ProjectsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: ProjectPostsResolve
        }
      },
      {
        path: 'du-an/bai-viet/:code',
        component: ProjectComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          post: ProjectPostResolve
        }
      },
      {
        path: 'tin-tuc',
        component: PostsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: NewsPostsResolve
        }
      },
      {
        path: 'tin-tuc/:code',
        component: PostsComponent,
        runGuardsAndResolvers: 'always',
        resolve: {
          posts: NewsPostsResolve
        }
      },
      {
        path: 'tin-tuc/bai-viet/:code',
        runGuardsAndResolvers: 'always',
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
