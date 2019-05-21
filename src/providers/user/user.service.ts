import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireObject, AngularFireList, snapshotChanges } from '@angular/fire/database';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './../../Models/user.models';
import { FirebaseApp } from "angularfire2";




@Injectable()
export class UserService {

  users: AngularFireList<User[]>;


  constructor(
    public db: AngularFireDatabase,
    public http: HttpClient,
    public firebaseApp: FirebaseApp,


    ) {

      this.users = this.db.list("/users");
    }

    getuserList() {
      this.db.database.ref("/users")
      console.log(this.getuserList)

    }


  create(user: User){
    return this.db.list("/users")
    .push(user)


  }
  }


