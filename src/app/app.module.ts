import { NotFoundPage } from './../pages/not-found/not-found';
import { UserCenterPage } from './../pages/user-center/user-center';
import { PayPage } from './../pages/pay/pay';
import { OrderConfrimPage } from './../pages/order-confrim/order-confrim';
import { LoginPage } from './../pages/login/login';
import { CartPage } from './../pages/cart/cart';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IndexPage } from '../pages/index';
import { DetailPage } from '../pages/detail/detail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    DetailPage,
    CartPage,
    LoginPage,
    OrderConfrimPage,
    PayPage,
    UserCenterPage,
    NotFoundPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    IndexPage,
    DetailPage,
    CartPage,
    LoginPage,
    OrderConfrimPage,
    PayPage,
    UserCenterPage,
    NotFoundPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
