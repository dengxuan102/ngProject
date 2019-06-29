import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient) {
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
}
