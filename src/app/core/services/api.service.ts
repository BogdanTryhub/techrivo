import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Items } from '../../shared/models/items.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<Items> {
    return this.http.get<Items>('/items');
  }
}
