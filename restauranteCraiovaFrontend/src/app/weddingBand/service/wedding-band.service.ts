import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeddingBand } from '../model/wedding-band';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeddingBandService {
  private weddingUrl: string;
  constructor(private http: HttpClient) {
    this.weddingUrl = 'http://localhost:8080/wedding';
  }

  public findAll(): Observable<WeddingBand[]> {
    return this.http.get<WeddingBand[]>(this.weddingUrl);
  }

  // tslint:disable-next-line:typedef
  public save(wedding: WeddingBand) {
    return this.http.post<WeddingBand[]>(this.weddingUrl, wedding);
  }

  // tslint:disable-next-line:typedef
  public update(wedding: WeddingBand) {
    return this.http.put<WeddingBand>(this.weddingUrl, wedding);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.weddingUrl}/${id}`);
  }

  // tslint:disable-next-line:typedef
  public delete(id: number) {
    return this.http.delete(`${this.weddingUrl}/${id}`);
  }
}
