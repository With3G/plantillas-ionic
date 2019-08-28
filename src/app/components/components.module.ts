import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
// Importamos el componente popinfo:
import { PopinfoComponent } from './popinfo/popinfo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent // Declaramos el popinfo
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PopinfoComponent // Exportamos el popinfo
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule 
  ]
})
export class ComponentsModule { }
