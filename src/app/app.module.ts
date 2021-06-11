import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { WelcomePage } from './../pages/welcome/welcome';
import { LoginTePage } from './../pages/login-te/login-te';
import { LoginStuPage } from '../pages/login-stu/login-stu';
import { ListStuPage } from '../pages/list-stu/list-stu';
import { ListstatusTePage } from '../pages/liststatus-te/liststatus-te';
import { ListdayTePage } from '../pages/listday-te/listday-te';
import { ListallTePage } from '../pages/listall-te/listall-te';
import { DetailliststatusTePage } from '../pages/detailliststatus-te/detailliststatus-te';
import { HomeStuPage } from '../pages/home-stu/home-stu';
import { ListallStuPage } from '../pages/listall-stu/listall-stu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeStuPage,
    WelcomePage,
    LoginTePage,
    LoginStuPage,
    ListStuPage,
    ListallStuPage,
    ListstatusTePage,
    ListdayTePage,
    ListallTePage,
    DetailliststatusTePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeStuPage,
    WelcomePage,
    LoginTePage,
    LoginStuPage,
    ListStuPage,
    ListallStuPage,
    ListstatusTePage,
    ListdayTePage,
    ListallTePage,
    DetailliststatusTePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
