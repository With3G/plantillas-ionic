import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalInfoPage } from './modal-info.page';
// Borramos o dejamos comentada la siguiente línea:
/* const routes: Routes = [
  {
    path: '',
    component: ModalInfoPage
  }
]; */

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // Borramos o comentamos esta línea: RouterModule.forChild(routes)
  ],
  declarations: [ModalInfoPage]
})
export class ModalInfoPageModule {}
