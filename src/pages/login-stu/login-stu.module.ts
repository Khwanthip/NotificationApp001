import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginStuPage } from './login-stu';

@NgModule({
  declarations: [
    LoginStuPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginStuPage),
  ],
})
export class LoginStuPageModule {}
