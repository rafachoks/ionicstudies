import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'details.html',
})
export class DetailsPage {
  item: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get("item");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
