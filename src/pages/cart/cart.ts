import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartList = []
  homePage = HomePage
  myValue = 0

  constructor(public navCtrl: NavController, public navParams: NavParams, private MyHttp: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ionViewWillEnter() {
    var url = `http://localhost:8080/cart/list`;
    this.MyHttp.get(url, { withCredentials: true }).subscribe((res: any) => {
      if (res.code == 300) {
        this.navCtrl.push(LoginPage);
      } else if (res.code == 200) {
        console.log(`购物车列表获取成功`, res.data);
        this.cartList = res.data;
      }
    })
  }



}
