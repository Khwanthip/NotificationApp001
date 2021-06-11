import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginTePage } from './login-te';

@NgModule({
  declarations: [
    LoginTePage,
  ],
  imports: [
    IonicPageModule.forChild(LoginTePage),
  ],
})
export class LoginTePageModule {}
