import { SignUpPage } from './../sign-up/sign-up';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  onSignUp(): void {
    this.navCtrl.push(SignUpPage)
  }

}
