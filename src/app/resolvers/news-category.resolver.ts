import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NewsCategoryApi } from '../apis';
import { Utils } from '../utils';

@Injectable()
export class NewsCategoryResolve implements Resolve<Object> {
  constructor(private router: Router, private api: NewsCategoryApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let query = route.params.keyword;
    return this.api.post('search', { keyword: Utils.parseCode(query) });
  }
}