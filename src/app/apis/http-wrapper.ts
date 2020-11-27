import { HttpClient, HttpResponse } from '@angular/common/http';
import * as _ from 'lodash';

export class HttpWrapper {
  constructor(public http: HttpClient, public baseURL: string) {
  }

  fetch(page: number, quantity: number, query: string = '') {
    const url = this.baseURL + `/fetch/${page}/${quantity}/${query}`;
    return this.http.get(url).toPromise();
  }

  fetchByType(type: string, page: number, quantity: number, query: string = '') {
    const url = this.baseURL + `/fetch/${type}/${page}/${quantity}/${query}`;
    return this.http.get(url).toPromise();
  }

  get(href: string = '', params: any = {}) {
    return this.http.get(this.baseURL + `/${href}`, {
      params: params
    }).toPromise();
  }

  file(href: string, type?: string) {
    return this.http.get(this.baseURL + `/${href}`, {
      responseType: 'arraybuffer',
      observe: 'response',
    }).toPromise().then((response: HttpResponse<ArrayBuffer>) => {
      return new Blob([response.body], { type: type || 'application/octet-stream' });
    })
  }

  text(href: string = '', params: any = {}) {
    return this.http.get(this.baseURL + `/${href}`, {
      params: params,
      responseType: 'text'
    }).toPromise();
  }

  post(href: string = '', data: any, params: any = {}) {
    return this.http.post(this.baseURL + `/${href}`, data, {
      params: params
    }).toPromise();
  }

  save(data: any) {
    return this.http.post(this.baseURL + ``, data).toPromise();
  }

  put(href: string = '', data: any, params: any = {}) {
    return this.http.put(this.baseURL + `/${href}`, data, {
      params: params
    }).toPromise();
  }

  update(data: any) {
    return this.http.put(this.baseURL + ``, data).toPromise();
  }

  single(code: string) {
    return this.http.get(this.baseURL + `/${code}`).toPromise();
  }

  delete(code: string) {
    return this.http.delete(this.baseURL + `/${code}`).toPromise();
  }

  selectize() {
    return this.http.get(this.baseURL + `/selectize`).toPromise();
  }

  published(code: string) {
    return this.http.post(this.baseURL + `/published/${code}`, {}).toPromise();
  }

  unpublished(code: string) {
    return this.http.post(this.baseURL + `/unpublished/${code}`, {}).toPromise();
  }
}
