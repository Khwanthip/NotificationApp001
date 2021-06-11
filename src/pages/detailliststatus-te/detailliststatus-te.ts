import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetailliststatusTePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailliststatus-te',
  templateUrl: 'detailliststatus-te.html',
})
export class DetailliststatusTePage {

  item = {overview:''};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailliststatusTePage');

    this.item = this.navParams.data;
    console.log(this.item);
  }

  backhome(){
    this.navCtrl.push(HomePage);
  }
  
}
