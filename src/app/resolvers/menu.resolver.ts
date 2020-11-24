import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ConfigurationApi } from '../apis';

@Injectable()
export class MenuResolve implements Resolve<Object> {
  constructor(private router: Router, private api: ConfigurationApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get();
  }
}
