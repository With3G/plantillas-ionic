import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  // Mandamos un tercer argumento a nuestro filtro:
  transform(arreglo: any[], texto: string, columna: string): any[] {
    if(texto === ''){
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter( item=>{
      // En el item reemplazamos el title por el tercer argumento:
      return item[columna].toLowerCase().includes(texto);
    });
  }

}
