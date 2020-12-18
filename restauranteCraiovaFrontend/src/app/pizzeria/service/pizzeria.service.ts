import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizzeria} from '../model/pizzeria';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {
  private pizzeriatUrl: string;
  constructor(private http: HttpClient) {
    this.pizzeriatUrl = 'http://localhost:8080/pizzeria';
  }

  public findAll(): Observable<Pizzeria[]> {
    return this.http.get<Pizzeria[]>(this.pizzeriatUrl);
  }

  // tslint:disable-next-line:typedef
  public save(pizzeria: Pizzeria) {
    return this.http.post<Pizzeria[]>(this.pizzeriatUrl, pizzeria);
  }

  // tslint:disable-next-line:typedef
  public update(pizzeria: Pizzeria) {
    return this.http.put<Pizzeria>(this.pizzeriatUrl, pizzeria);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.pizzeriatUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.pizzeriatUrl}/${id}`);
  }
}
