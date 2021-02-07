import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizzeria} from '../model/pizzeria';

@Injectable({
  providedIn: 'root'
})
export class PizzeriaService {
  private pizzeriatUrl: string;
  private photoUrl: string;
  constructor(private http: HttpClient) {
    this.pizzeriatUrl = 'http://localhost:8080/pizzeria';
    this.photoUrl = 'http://localhost:8080/photospizzeria';//AICI SE PUNE PATHUL DE LA METODA DE SALVARE

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
  public upload(photo: File): Observable<HttpEvent<any>> {
    console.log(photo.name);
    const formData: FormData = new FormData();
    formData.append('photo', photo);
    const req = new HttpRequest('POST', this.photoUrl, formData, {
      reportProgress: true,
      responseType: 'text' as 'json'
    });
    return this.http.request(req);
  }
  getPizzeriaphotos(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/pizza/photos/${id}`);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.photoUrl); }
}
