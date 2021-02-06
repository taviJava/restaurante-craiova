import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeddingBand} from '../../weddingBand/model/wedding-band';
import {Restaurant} from '../model/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private restaurantUrl: string;
  private photoUrl: string;

  constructor(private http: HttpClient) {
    this.restaurantUrl = 'http://localhost:8080/restaurant';
    this.photoUrl = 'http://localhost:8080/photos/restaurant';
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
  getRestaurantphotos(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/restaurant/photos/${id}`);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.photoUrl); }
}
