import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalPage } from './modal.page';
import { ComponentsModule } from '../components/components.module';
// Importamos el modalinfopage:
import { ModalInfoPage } from '../modal-info/modal-info.page';
// también el modalinfopagemodule:
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

const routes: Routes = [
  {
    path: '',
    component: ModalPage
  }
];

@NgModule({
  entryComponents: [ // Cargamos el entrycomponents y en el, el modalinfopage.
    ModalInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    ModalInfoPageModule // Cargamos en los imports el modalinfopagemodule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
