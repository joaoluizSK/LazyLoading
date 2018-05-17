import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html'
})
export class SecondPage {
  constructor(public navCtrl: NavController, public navParams: NavParams){}
}
