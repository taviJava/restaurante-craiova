import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {WeddingBand} from '../model/wedding-band';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeddingBandService {
  private weddingUrl: string;
  private photoUrl: string;

  constructor(private http: HttpClient) {
    this.weddingUrl = 'http://localhost:8080/wedding';
    this.photoUrl = 'http://localhost:8080/photos/weddingBand';
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

  getWeddingBandphotos(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/weddingBand/photos/${id}`);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.photoUrl);
  }
}
