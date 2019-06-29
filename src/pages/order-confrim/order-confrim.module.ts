import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderConfrimPage } from './order-confrim';

@NgModule({
  declarations: [
    OrderConfrimPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderConfrimPage),
  ],
})
export class OrderConfrimPageModule {}
