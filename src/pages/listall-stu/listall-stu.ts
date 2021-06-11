import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListallStuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listall-stu',
  templateUrl: 'listall-stu.html',
})
export class ListallStuPage {

  listallstuArray = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage) {

      this.listallstuData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListallStuPage');
  }

  listallstuData() {
    this.storage.get('student_id').then((val) => {
      let url = 'http://localhost/projectappsql/listall_stu.php?recorder='+val;
      this.http.get(url).subscribe((data: any) => {
        this.listallstuArray = data.listallstuArray;
        console.log(data);
      }, (error) => { console.log(error) });
    })
  }

}
