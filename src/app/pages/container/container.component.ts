import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  constructor(route: ActivatedRoute) {
    this.menus = route.snapshot.data['menu']
  }

  menus: Array<any>
}
