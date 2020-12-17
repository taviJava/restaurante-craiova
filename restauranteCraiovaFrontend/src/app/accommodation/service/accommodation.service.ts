import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accommodation} from '../model/accommodation';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccommodationService {
  private accomodationUrl: string;

  constructor(private http: HttpClient) {
    this.accomodationUrl = 'http://localhost:8080/accomodation';
  }

  // tslint:disable-next-line:typedef
  public save(accomodation: Accommodation) {
    return this.http.post<Accommodation>(this.accomodationUrl, accomodation);
  }

  public findAll(): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(this.accomodationUrl);
  }

  // tslint:disable-next-line:typedef
  public update(accomodation: Accommodation) {
    return this.http.put<Accommodation>(this.accomodationUrl, accomodation);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.accomodationUrl}/${id}`);
  }
  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.accomodationUrl}/${id}`);
  }
}
