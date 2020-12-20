import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Photo} from '../model/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photoUrl: string;

  constructor(private http: HttpClient) {
    this.photoUrl = 'http://localhost:8080/photos';
  }

  public findAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoUrl);
  }

  // tslint:disable-next-line:typedef
  public save(photo: Photo) {
    return this.http.post<Photo>(this.photoUrl, photo);
  }

  // tslint:disable-next-line:typedef
  public update(photo: Photo) {
    return this.http.put<Photo>(this.photoUrl, photo);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(`${this.photoUrl}/${id}`);
  }
  upload(photo: File, id: number): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('photo', photo);

    const req = new HttpRequest('POST', this.photoUrl, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.photoUrl);
  }
}
