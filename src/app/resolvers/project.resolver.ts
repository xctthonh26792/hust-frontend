import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ProjectApi } from '../apis';
import { Utils } from '../utils';

@Injectable()
export class ProjectPostResolve implements Resolve<Object> {
  constructor(private router: Router, private api: ProjectApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let query = route.params.code
    return this.api.get(Utils.parseCode(query));
  }
}

@Injectable()
export class ProjectPostsResolve implements Resolve<Object> {
  constructor(private router: Router, private api: ProjectApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = Utils.isStringEmpty(route.queryParamMap.get('p')) ? 1 : route.queryParamMap.get('p')
    let quantity = Utils.isStringEmpty(route.queryParamMap.get('q')) ? 10 : route.queryParamMap.get('q')
    let type = Utils.parseCode(route.params.code)
    if (Utils.isStringEmpty(type)) {
      return this.api.fetch(+page, +quantity);
    }
    return this.api.fetchByType(type, +page, +quantity);
  }
}
