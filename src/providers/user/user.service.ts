
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/map';
import firebase from 'firebase/app';
import { User } from '../../app/Models/model';
import { Observable } from 'rxjs';

import { AngularFireObject, AngularFireDatabase, AngularFireList  } from '@angular/fire/database';


@Injectable()
export class UserService {

users: AngularFireList<User[]>

  constructor(
    public http: HttpClient,
    private db: AngularFireDatabase,
    ) {

      this.users = this.db.list(`/users`)

    }

    getuserList() {
      return this.users.valueChanges();
    }

    create(user: User) {
      return this.db.list("/users")
      .push(user)


    }
  }
