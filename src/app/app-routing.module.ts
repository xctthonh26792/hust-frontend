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
import { MenuResolve, PublicationPostResolve, BannerResolve } from './resolvers';
import { EventPostResolve } from './resolvers/event.resolver';
import { NewsPostResolve } from './resolvers/news.resolver';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    resolve: {
      menu: MenuResolve,
      data: BannerResolve
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'su-kien',
        component: EventsComponent
      },
      {
        path: 'su-kien/:code',
        component: EventsComponent
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
        component: PublicationsComponent
      },
      {
        path: 'xuat-ban/:code',
        component: PublicationsComponent
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
        component: ProjectsComponent
      },
      {
        path: 'du-an/:code',
        component: ProjectsComponent
      },
      {
        path: 'du-an/bai-viet/:code',
        component: ProjectComponent
      },
      {
        path: 'current-projects',
        component: CurrentProjectsComponent
      },
      {
        path: 'tin-tuc',
        component: PostsComponent
      },
      {
        path: 'tin-tuc/:code',
        component: PostsComponent
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
