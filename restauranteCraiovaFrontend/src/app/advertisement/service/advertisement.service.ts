import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Accommodation} from '../../accommodation/model/accommodation';
import {Observable} from 'rxjs';
import {Advertisement} from '../model/advertisement';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  private advertismentUrl: string;

  constructor(private http: HttpClient) {
    this.advertismentUrl = 'http://localhost:8080/advertisment';
  }

  // tslint:disable-next-line:typedef
  public save(advertisment: Advertisement) {
    return this.http.post<Advertisement>(this.advertismentUrl, advertisment);
  }

  public findAll(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(this.advertismentUrl);
  }

  // tslint:disable-next-line:typedef
  public update(advertisment: Advertisement) {
    return this.http.put<Accommodation>(this.advertismentUrl, advertisment);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.advertismentUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.advertismentUrl}/${id}`);
  }
}
