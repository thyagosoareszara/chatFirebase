import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signUpForm: FormGroup;

  constructor(
              public FormBuilder: FormBuilder,
              public navCtrl: NavController,
              public navParams: NavParams,

    ) {

      let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

      this.signUpForm = this.FormBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        username: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
        password: ['', [Validators.required, Validators.minLength(6)]],

        });
  }

  onSubmit(): void {
    console.log('Form submit')
  }

}
