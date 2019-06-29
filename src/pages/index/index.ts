import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'
import { DetailPage } from '../detail/detail';

/**
 * Generated class for the IndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-index',
  templateUrl: 'index.html',
})
export class IndexPage {
  searchQuery: string = ''
  items: string[]
  carouselList = [] //轮播图数据
  newArrivalItems = [] //新品上市数据
  recommendedItems = [] //推荐商品

  detail = DetailPage

  constructor(public navCtrl: NavController, public navParams: NavParams, private myHttp: HttpClient, private loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IndexPage');
    // 发送请求
    var url = 'http://localhost:8080/index';
    this.myHttp.get(url).subscribe((res: any) => {
      console.log(res)
      this.carouselList = res.carouselItems;
      this.newArrivalItems = res.newArrialItems;
      this.recommendedItems = res.recommendedItems;
      console.log(this.recommendedItems)
    })
    // 保存数据
    // 显示在视图

  }

  initializeItems() {
    this.items = ['Amsterdam',
      'Bogota',]
  }

  getItems(ev: any) {
    this.initializeItems();

    const val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return ((item.toLowerCase().indexOf(val.toLowerCase())) > -1)
      })
    }
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      // for (let i = 0; i < 30; i++) {
      //   this.recommendedItems.push(this.recommendedItems.length);
      // }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  loadingCTrl() {

    this.loadingCtrl.create({ duration: 200 }).present();
  }

}
