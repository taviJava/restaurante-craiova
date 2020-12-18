import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeddingBand} from '../../weddingBand/model/wedding-band';
import {Restaurant} from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl: string;
  constructor(private http: HttpClient) {
    this.restaurantUrl = 'http://localhost:8080/restaurant';
  }

  public findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantUrl);
  }

  // tslint:disable-next-line:typedef
  public save(restaurant: Restaurant) {
    return this.http.post<Restaurant[]>(this.restaurantUrl, restaurant);
  }

  // tslint:disable-next-line:typedef
  public update(restaurant: Restaurant) {
    return this.http.put<Restaurant>(this.restaurantUrl, restaurant);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.restaurantUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.restaurantUrl}/${id}`);
  }
}
