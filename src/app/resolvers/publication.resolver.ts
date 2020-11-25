import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PublicationApi } from '../apis';
import { Utils } from '../utils';

@Injectable()
export class PublicationPostResolve implements Resolve<Object> {
  constructor(private router: Router, private api: PublicationApi) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let query = route.params.code
    console.log(Utils.parseCode(query))
    return this.api.get('42432');
  }
}
