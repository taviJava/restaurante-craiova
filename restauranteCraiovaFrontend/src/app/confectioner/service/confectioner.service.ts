import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WeddingBand} from '../../weddingBand/model/wedding-band';
import {Confectioner} from '../model/confectioner';

@Injectable({
  providedIn: 'root'
})
export class ConfectionerService {
  private confectionerUrl: string;

  constructor(private http: HttpClient) {
    this.confectionerUrl = 'http://localhost:8080/confectioner';
  }

  public findAll(): Observable<Confectioner[]> {
    return this.http.get<Confectioner[]>(this.confectionerUrl);
  }

  // tslint:disable-next-line:typedef
  public save(confectioner: Confectioner) {
    return this.http.post<Confectioner[]>(this.confectionerUrl, confectioner);
  }

  // tslint:disable-next-line:typedef
  public update(confectioner: Confectioner) {
    return this.http.put<Confectioner>(this.confectionerUrl, confectioner);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.confectionerUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.confectionerUrl}/${id}`);
  }
}
