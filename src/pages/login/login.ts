import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginName = ''
  loginPwd = ''

  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  doLogin() {
    //获取用户名和密码
    console.log(this.loginName);
    console.log(this.loginPwd);

    //发起post请求，验证用户名和密码是否正确
    var url = 'http://localhost:8080/user/login'
    this.myHttp.post(url, { uname: this.loginName, upwd: this.loginPwd }, { withCredentials: true }).subscribe((res: any) => {
      console.log(res);
      if (res.code == 200) {
        this.navCtrl.pop();
      } else {
        this.toastCtrl.create({
          message: '登陆失败',
          duration: 2000
        }).present()
      }
    })
  }

}
