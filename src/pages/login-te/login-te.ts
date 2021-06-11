import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

import { HomePage } from './../home/home';

/**
 * Generated class for the LoginTePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-te',
  templateUrl: 'login-te.html',
})
export class LoginTePage {

  logindata:any = {};
  username: any;
  password: any;
  data: Observable<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl : AlertController,
    private storage: Storage) {

      this.logindata.username = "";
      this.logindata.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginTePage');
  }

  login_te(username,password){
    let url = 'http://localhost/projectappsql/login_te.php?user=' + username + '&pass=' + password;

    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      this.storage.set('teacher_id', data.teacher_id);
      this.storage.get('teacher_id').then((val) => {
      console.log('teacher_id is',val);
      })
      //console.log(data.id);
      console.log(data.teacher_id);
      if (data.teacher_id == null) {
        alert("ไม่มี Username นี้ในระบบ");

      } else {
        alert("ยินดีต้อนรับเข้าสู่แอพ");
        this.navCtrl.push(HomePage);
      }
      console.log(data);
    });
  }

}
