import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ListStuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-stu',
  templateUrl: 'list-stu.html',
})
export class ListStuPage {

  liststuArray = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage) {

      this.liststuData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListStuPage');
  }

  liststuData(){
      this.storage.get('student_id').then((val) => {
      let url = 'http://localhost/projectappsql/get_apponit.php?recorder='+val;
      this.http.get(url).subscribe((data: any) => {
        this.liststuArray = data.liststuArray;
        console.log(data);
      }, (error) => { console.log(error) });
    })
  }

}
