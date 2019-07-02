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
  isAllSelected = false

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
        // 遍历this.myList数组，给每个对象添加一个属性isSelected
        for (let i = 0; i < this.cartList.length; i++) {
          this.cartList[i].isSelected = false;
        }
      }
    })
  }
  onChange() {
    for (let i = 0; i < this.cartList.length; i++) {
      // this.cartList[i].isSelected = true;
      this.cartList[i].isSelected = this.isAllSelected;
    }

  }
  ChangeOne() {
    // 第一种方式逻辑与运算
    var result = true;
    for (let i = 0; i < this.cartList.length; i++) {
      result = result && this.cartList[i].isSelected;
    }
    this.isAllSelected = result;

    // 第二种方式：判断未被选中的项，有则全选被取消，跳出循环
    // for (let i = 0; i < this.cartList.length; i++) {
    //   if (this.cartList[i].isSelected == false) {
    //     this.isAllSelected = false;
    //     break;
    //   } else {
    //     this.isAllSelected = true;
    //   }
    // }
  }
  // 计算被选中商品的总价
  calcAll() {
    var totalPrice = 0
    for (let i = 0; i < this.cartList.length; i++) {
      if (this.cartList[i].isSelected) {
        totalPrice += this.cartList[i].price * this.cartList[i].count;
      }
    }
    return totalPrice;
  }

  // 点击按钮增减数量
}