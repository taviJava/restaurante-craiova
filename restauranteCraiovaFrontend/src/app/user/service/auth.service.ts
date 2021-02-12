import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  TOKEN_SESSION_ATTRIBUTE_NAME = 'authenticatedToken';
  USER_DATA_SESSION_ATTRIBUTE_NAME = 'authenticatedUserData';


  public username: string;
  public password: string;
  public user: User = new User();
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public ret = false;
  public isPrivilege: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public token: string;

  constructor(private http: HttpClient, public userService: UserService) {
    this.user.role = 'null';
  }
  authentication(user: User): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/login`, user);
  }

  // tslint:disable-next-line:typedef
  registerSuccessfulLogin(username) {
    sessionStorage.setItem('email', this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    sessionStorage.setItem('token', this.TOKEN_SESSION_ATTRIBUTE_NAME);
    this.userService.getByEmail(username, this.getToken() ).subscribe(data => {
      this.user = new User();
      this.user = JSON.parse(data) as User;
      sessionStorage.setItem('role', this.user.role);
      this.isLoggedIn.next(true);
    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('role');
    this.isLoggedIn.next(false);
    this.username = null;
    this.password = null;
  }
  // tslint:disable-next-line:typedef
  getToken(){
    return sessionStorage.getItem('token');
  }
  // tslint:disable-next-line:typedef
  getUserLoggedIn(){
    return sessionStorage.getItem('email');
  }
  // tslint:disable-next-line:typedef
  getAdm(){
    return sessionStorage.getItem('role');
  }
  // tslint:disable-next-line:typedef
  isUserLoggedIn() {
    const user = this.getUserLoggedIn();
    if (user === null) {
      this.isLoggedIn.next(false);
      return false;
    }
    this.isLoggedIn.next(true);
    return true;
  }
  // tslint:disable-next-line:typedef
  isUserAdm(){
    if (this.getAdm() === 'Admin'){
      return true;
    }else {
      return false;
    }
  }
}
