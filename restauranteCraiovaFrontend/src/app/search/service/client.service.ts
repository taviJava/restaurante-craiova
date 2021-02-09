import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizzeria} from '../../pizzeria/model/pizzeria';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  searchUrl: string;
  constructor(private http: HttpClient) {
    this.searchUrl = 'http://localhost:8080/search';
  }
  public findAll(key: string): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.searchUrl}/${key}`);
  }
  getClientPhotos(id: number): Observable<any> {
    return this.http.get(`${this.searchUrl}/photos/${id}`);
  }
}
