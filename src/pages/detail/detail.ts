import { LoginPage } from './../login/login';
import { CartPage } from './../cart/cart';
import { NotFoundPage } from './../not-found/not-found';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  lid = 0
  picList = []
  price = 0
  promise = ''
  subTitle = ''
  title = ''
  notFound = NotFoundPage
  cart = CartPage
  msg = ''  // 加入购物车提示消息

  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient, private ToastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.lid = this.navParams.get('pid')
    // console.log(this.lid)
    // console.log('ionViewDidLoad DetailPage');
    let url = `http://localhost:8080/product/detail?lid=${this.lid}`
    this.myHttp.get(url).subscribe((res: any) => {
      // console.log(res.details)
      this.picList = res.details.picList
      this.title = res.details.title
      this.subTitle = res.details.subtitle
      this.price = res.details.price.toFixed(2)
      this.promise = res.details.promise
      // console.log(this.picList, this.title, this.promise, this.subTitle, this.price);

    })
  }
  jump404() {
    this.navCtrl.push(this.notFound)
  }
  jumpCart() {
    var url = `http://localhost:8080/cart/list`;
    this.myHttp.get(url, { withCredentials: true }).subscribe((res: any) => {
      if (res.code == 200) {
        console.log(res.code)
        this.navCtrl.push(this.cart);
      } else if (res.code == 300) {
        this.navCtrl.push(LoginPage)
      }
    })
  }
  addToCart() {
    var url = 'http://localhost:8080/cart/add?buyCount=1&lid=' + this.lid;
    this.myHttp.get(url, { withCredentials: true }).subscribe((res: any) => {
      console.log(res);
      if (res.code == 300) {
        this.msg = '您未登录';
        this.navCtrl.push(LoginPage)
      } else if (res.code == 200) {
        this.msg = "添加到购物车成功"
      }
      // Toast通知
      this.ToastCtrl.create({
        message: this.msg,
        duration: 500,
        position: 'middle'
      }).present()
    })
  }
}
