import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListStuPage } from './list-stu';

@NgModule({
  declarations: [
    ListStuPage,
  ],
  imports: [
    IonicPageModule.forChild(ListStuPage),
  ],
})
export class ListStuPageModule {}
