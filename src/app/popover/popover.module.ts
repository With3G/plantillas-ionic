import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopoverPage } from './popover.page';
// Cargamos la librería del componente popinfo:
import { PopinfoComponent } from '../components/popinfo/popinfo.component';
// Cargamos también el ComponentsModule para utilizar el popinfo:
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  // Cargamos los entrycomponents y ponemos el componente popinfo:
  entryComponents: [
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule // Tenemos que cargar también el modulo de componentes para el popinfo.
  ],
  declarations: [PopoverPage]
})
export class PopoverPageModule {}
