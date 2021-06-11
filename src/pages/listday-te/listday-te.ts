import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

//import { HomePage } from '../home/home';

/**
 * Generated class for the ListdayTePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listday-te',
  templateUrl: 'listday-te.html',
})
export class ListdayTePage {

  listday = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage) {

      this.loadlistdayData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListdayTePage');
  }

  loadlistdayData() {
    this.storage.get('teacher_id').then((val) => {
      let url = 'http://localhost/projectappsql/listday_te.php?teacher_id='+val;
      this.http.get(url).subscribe((data: any) => {
        this.listday = data.listday;
        console.log(data);
      }, (error) => { console.log(error) });
    })
  }

/*   backhome(){
    this.navCtrl.push(HomePage);
  } */
  
}
