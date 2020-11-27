import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EventApi } from '../apis';
import { Utils } from '../utils';

@Injectable()
export class EventPostResolve implements Resolve<Object> {
  constructor(private router: Router, private api: EventApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let query = route.params.code
    console.log(Utils.parseCode(query))
    return this.api.get('SK2011001');
  }
}

@Injectable()
export class EventHomeDataResolve implements Resolve<Object> {
  constructor(private router: Router, private api: EventApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.api.get('top3');
  }
}

