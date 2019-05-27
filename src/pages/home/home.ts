import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignUpPage } from './../sign-up/sign-up';
import { User } from '../../Models/user.models';
import { UserService } from './../../providers/user/user.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: Observable<User[]>;
  UserService: any;

  constructor(public navCtrl: NavController,
    public userService: UserService,
    public db: AngularFireDatabase
  ) {}


  ionViewDidLoad() {
    this.users = this.userService.getUserList();
  }

  onChatCreate(user: User) {
    this.userService.users
    console.log('User: ', user);
  }

  onSignUp(): void {
    this.navCtrl.push(SignUpPage)
  }

}
