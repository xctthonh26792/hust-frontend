import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { NewsApi } from '../apis';
import { Utils } from '../utils';

@Injectable()
export class NewsPostResolve implements Resolve<Object> {
  constructor(private router: Router, private api: NewsApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let query = route.params.code
    console.log(Utils.parseCode(query))
    return this.api.get('TT2011001');
  }
}
