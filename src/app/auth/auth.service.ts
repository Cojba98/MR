import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject} from "rxjs";
import {User} from "./user.model";
import {map, tap} from "rxjs/operators";

interface AuthResponseData{
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

interface UserData{
  name?: string;
  surname?: string;
  phone?: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticated = false;
  private user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {

  }

  get isUserAuthenticated(){
    return this.user.asObservable().pipe(
      map((user) => {
        if(user){
          return !!user.token;
        }else{
          return false;
        }
      })
    );
  }

  get userId(){
    return this.user.asObservable().pipe(
      map((user) => {
        if(user){
          return user.id;
        }else{
          return null;
        }
      })
    );
  }

  get token(){
    return this.user.asObservable().pipe(
      map((user) => {
        if(user){
          return user.token;
        }else{
          return null;
        }
      })
    );
  }

  get userEmail(){
    return this.user.value.email;
  }


  register(user: UserData){
    this.userAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {email: user.email, password: user.password, returnSecureToken: true})
      .pipe(
        tap((userData) => {
          const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
          const uuser = new User(userData.localId, userData.email, userData.idToken, expirationTime);
          this.user.next(uuser);
        })
      );
    ;
  }

  logIn(user: UserData){
    this.userAuthenticated = true;
    return this.http.post<AuthResponseData>
    (`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`,
      {email: user.email, password: user.password, returnSecureToken: true})
      .pipe(
        tap((userData) => {
          const expirationTime = new Date(new Date().getTime() + +userData.expiresIn * 1000);
          const uuser = new User(userData.localId, userData.email, userData.idToken, expirationTime);
          this.user.next(uuser);
        })
      );
  }

  logOut(){
    this.userAuthenticated = false;
    this.user.next(null);
  }

}
