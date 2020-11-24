import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @Input("models") models: Array<any>
  @Input("path") path: string
  constructor() {
    console.log(this)
  }
}
