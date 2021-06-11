import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeStuPage } from './home-stu';

@NgModule({
  declarations: [
    HomeStuPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeStuPage),
  ],
})
export class HomeStuPageModule {}
