import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListStuPage } from '../list-stu/list-stu';

import { ListallStuPage } from '../listall-stu/listall-stu';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the HomeStuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-stu',
  templateUrl: 'home-stu.html',
})
export class HomeStuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeStuPage');
  }

  liststatusstuView(){
    this.navCtrl.push(ListStuPage)
  }

  listallstuView(){
    this.navCtrl.push(ListallStuPage)
  }

  logout(){
    localStorage.clear(); //becausae i have information from user
    console.log(localStorage.clear);
    this.navCtrl.push(WelcomePage)
  }

}
