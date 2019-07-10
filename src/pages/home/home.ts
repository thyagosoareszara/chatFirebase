import { UserService } from './../../providers/user/user.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireObject, AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { User } from '../../app/Models/model';
import { Observable } from 'rxjs/Observable';
import { SignupPage } from '../../pages/signup/signup';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users
  UserService: any;

  constructor(
    public navCtrl: NavController,
    public userService: UserService,
    public db: AngularFireDatabase,
    ) {

    }

    ionViewDidLoad() {
      this.users = this.userService.getuserList()
    }

  onChatCreate(user: User) {
    this.userService.users
    console.log('User: ', user);
  }

  onSignUp() {
    this.navCtrl.push(SignupPage)
  }

}
