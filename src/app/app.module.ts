
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule, FirebaseAppConfig } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';

import { AuthService } from '../providers/auth/auth.service';
import { UserService } from '../providers/user/user.service';


const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyD8e9wKkGqSY4YkmBjEcmSZZQnPPU3TWkE",
  authDomain: "curso-ionic-chat-cfb73.firebaseapp.com",
  databaseURL: "https://curso-ionic-chat-cfb73.firebaseio.com",
  storageBucket: "curso-ionic-chat-cfb73.appspot.com",
  messagingSenderId: "366254907495",

};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAppConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    AuthService,
    AngularFireDatabase,
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
