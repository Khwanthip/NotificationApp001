import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

//import { HomePage } from '../home/home';

/**
 * Generated class for the ListstatusTePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liststatus-te',
  templateUrl: 'liststatus-te.html',
})
export class ListstatusTePage {

  liststatus = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage) {

      this.loadliststatusData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListstatusTePage');
  }

  loadliststatusData() {
    this.storage.get('teacher_id').then((val) => {
      let url = 'http://localhost/projectappsql/liststatus_te.php?teacher_id='+val;
      this.http.get(url).subscribe((data: any) => {
        this.liststatus = data.liststatus;
        console.log(data);
      }, (error) => { console.log(error) });
    })
  }

/*   backhome(){
    this.navCtrl.push(HomePage);
  } */
  
}
