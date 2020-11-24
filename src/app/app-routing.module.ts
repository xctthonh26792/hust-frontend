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
import { MenuResolve } from './resolvers';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    resolve: {
      menu: MenuResolve
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
        component: EventComponent
      },
      {
        path: 'xuat-ban',
        component: PublicationsComponent
      },
      {
        path: 'xuat-ban/:code',
        component: PublicationComponent
      },
      {
        path: 'du-an',
        component: ProjectsComponent
      },
      {
        path: 'du-an/:code',
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
        component: PostComponent
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
