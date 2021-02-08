import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Confectioner} from '../model/confectioner';

@Injectable({
  providedIn: 'root'
})
export class ConfectionerService {
  private confectionerUrl: string;
  private photoUrl: string;

  constructor(private http: HttpClient) {
    this.confectionerUrl = 'http://localhost:8080/confectioner';
    this.photoUrl = 'http://localhost:8080/photosconfectioner';
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

  getConfectionerphotos(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/confectioner/photos/${id}`);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.photoUrl);
  }
}
