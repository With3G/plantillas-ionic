import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RefrescarPage } from './refrescar.page';
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: RefrescarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [RefrescarPage]
})
export class RefrescarPageModule {}
