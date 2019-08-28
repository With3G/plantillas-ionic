import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPage } from './action-sheet.page';
// Cargamos el módulo components:
import { ComponentsModule } from '../components/components.module';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule // Declaramos la importación del módulo components
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
