import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';
import { ListallTePage } from './../listall-te/listall-te';
import { ListdayTePage } from './../listday-te/listday-te';
import { ListstatusTePage } from './../liststatus-te/liststatus-te';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  liststatusView(){
    this.navCtrl.push(ListstatusTePage)
  }

  listdayView(){
    this.navCtrl.push(ListdayTePage)
  }

  listView(){
    this.navCtrl.push(ListallTePage)

  }

  logout(){
    localStorage.clear(); //becausae i have information from user
    console.log(localStorage.clear);
    this.navCtrl.push(WelcomePage)
  }

}
