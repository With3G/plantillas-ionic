import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'contacto'
  },  {
    path: '',
    component: TabsPage,
    // Creamos el identificador children y añadimos las rutas hijas:
    children: [
      {
        path: 'cuenta', // Señalamos la ruta del tabs.
        loadChildren: '../avatar/avatar.module#AvatarPageModule' // Ahora localizamos la ruta del modulo de la page que vamos a enlazar.
      }, {                                       // Justo después de la almohadilla ponemos el nombre del modulo
        path: 'contacto',
        loadChildren: '../listados/listados.module#ListadosPageModule'
      }, {
        path: 'propiedades',
        loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
