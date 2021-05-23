import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

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
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isUserAuthenticated = false;

  constructor(private http: HttpClient) {

  }

  get isUserAuthenticated(): boolean {
    // eslint-disable-next-line no-underscore-dangle
    return this._isUserAuthenticated;
  }

  register(user: UserData){
    // eslint-disable-next-line no-underscore-dangle
    this._isUserAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`,
      {email: user.email, password: user.password, returnSecureToken: true});
  }

  logIn(){
    // eslint-disable-next-line no-underscore-dangle
    this._isUserAuthenticated = true;
  }

  logOut(){
    // eslint-disable-next-line no-underscore-dangle
    this._isUserAuthenticated = false;
  }

}
