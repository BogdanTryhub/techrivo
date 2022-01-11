import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { delay, mergeMap} from 'rxjs/operators';

import { Items } from '../../shared/models/items.model';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const mockData = {
      id: 1,
      name: 'hello world',
      items:
        [
          { key: 'foo', value: 'bar' },
          { key: 'baz', value: 1 }
        ]
    };

    const { url, method } = req;

    const handleRoute = () => {
      if (url.includes('items') && method === 'GET') {
        return getUsers();
      }
      return next.handle(req);
    };

    const getUsers = () => {
      return ok(mockData);
    };

    const ok = (body: Items) => {
      return of(new HttpResponse({ status: 200, body }))
    };

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(
        mergeMap(handleRoute),
        delay(500)
      );
  }
}
