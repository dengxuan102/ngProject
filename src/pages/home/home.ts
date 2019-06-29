import { NotFoundPage } from './../not-found/not-found';
import { UserCenterPage } from './../user-center/user-center';
import { CartPage } from './../cart/cart';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IndexPage } from '../index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  index = IndexPage
  cart = CartPage
  userCenter = UserCenterPage
  notFound = NotFoundPage
  constructor(public navCtrl: NavController) {

  }

}
