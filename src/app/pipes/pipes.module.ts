import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [FiltroPipe],
  imports: [
    CommonModule
  ],
  // Exportamos nuestro filtro:
  exports: [
    FiltroPipe
  ]
})
export class PipesModule { }
