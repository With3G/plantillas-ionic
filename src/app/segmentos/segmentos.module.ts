import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentosPage } from './segmentos.page';
import { ComponentsModule } from '../components/components.module';
// Importamos el pipes module:
import { PipesModule } from '../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: SegmentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    PipesModule // Cargamos el modulo pipes.
  ],
  declarations: [SegmentosPage]
})
export class SegmentosPageModule {}
