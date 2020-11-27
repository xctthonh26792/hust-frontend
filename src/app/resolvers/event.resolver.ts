import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EventApi } from '../apis';
import { Utils } from '../utils';

@Injectable()
export class EventPostResolve implements Resolve<Object> {
  constructor(private router: Router, private api: EventApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let query = route.params.code
    return this.api.get(Utils.parseCode(query));
  }
}

@Injectable()
export class EventPostsResolve implements Resolve<Object> {
  constructor(private router: Router, private api: EventApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let page = Utils.isStringEmpty(route.queryParamMap.get('p')) ? 1 : route.queryParamMap.get('p')
    let quantity = Utils.isStringEmpty(route.queryParamMap.get('q')) ? 10 : route.queryParamMap.get('q')
    return this.api.fetch(+page, +quantity);
  }
}

@Injectable()
export class EventHomeDataResolve implements Resolve<Object> {
  constructor(private router: Router, private api: EventApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get('top3');
  }
}

