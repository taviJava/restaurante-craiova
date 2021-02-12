import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost:8080/users';
  }

  public save(user: User): Observable<any> {
    return this.http.post<any>('http://localhost:8080/register', user, {responseType: 'text' as 'json'});
  }
  public getByEmail(email: string, token: string): Observable<any> {
    const tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.http.get(`${this.userUrl}/${email}`, {headers, responseType: 'text' as 'json'});
  }
}
