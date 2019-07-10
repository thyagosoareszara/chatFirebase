import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth, } from '@angular/fire/auth';


@Injectable()
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    public http: HttpClient,



    ) {
    console.log('Hello AuthProvider Provider');
  }

  createAuthUser (user: {email:string, password:string}): void {
    return this.createAuthUser(user)

  }

}
