import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

import { HomeStuPage } from '../home-stu/home-stu';

/**
 * Generated class for the LoginStuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-stu',
  templateUrl: 'login-stu.html',
})
export class LoginStuPage {

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
    console.log('ionViewDidLoad LoginStuPage');
  }

  login_stu(username,password){
    let url = 'http://localhost/projectappsql/login_stu.php?user=' + username + '&pass=' + password;

    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      this.storage.set('student_id', data.student_id);
      this.storage.get('student_id').then((val) => {
      console.log('student_id is',val);
      })
      //console.log(data.id);
      console.log(data.student_id);
      if (data.student_id == null) {
        alert("ไม่มี Username นี้ในระบบ");

      } else {
        alert("ยินดีต้อนรับเข้าสู่แอพ");
        this.navCtrl.push(HomeStuPage);
      }

      console.log(data);

    });
  }

}
