import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

//import { HomePage } from '../home/home';
import { DetailliststatusTePage } from '../detailliststatus-te/detailliststatus-te';

/**
 * Generated class for the ListallTePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listall-te',
  templateUrl: 'listall-te.html',
})
export class ListallTePage {

  listArray = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public http: HttpClient,
    private storage: Storage) {

      this.loadlistallData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListallTePage');
  }

  loadlistallData() {
    this.storage.get('teacher_id').then((val) => {
      let url = 'http://localhost/projectappsql/listall_te.php?teacher_id='+val;
      this.http.get(url).subscribe((data: any) => {
        this.listArray = data.listArray;
        console.log(data);
      }, (error) => { console.log(error) });
    })
  }

    
  detailliststatusView(item){
    this.navCtrl.push(DetailliststatusTePage,item);
  }

/*   backhome(){
    this.navCtrl.push(HomePage);
  } */
  
}
