// Cargamos el ViewChild:
import { Component, OnInit, ViewChild } from '@angular/core';
// Cargamos el infinite scroll:
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  // Recuperamos el infiniteScroll y lo guardamos en un atributo:
  @ViewChild(IonInfiniteScroll, {static: true}) infiniteScroll: IonInfiniteScroll;

  // Creamos un array con 20 posiciones:
  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  // Creamos el método que cargará los datos cuando se acerce al final del scroll:
  loadData(event){
    console.log("Cargando siguientes");

    // Vamos a simular una carga asincrona:
    setTimeout(() =>{
      // Si hay mas de 50 elementos en el array detendremos la carga de elementos:
      if(this.data.length > 50){
        event.target.complete();
        // Deshabilitamos el infiniteScroll:
        this.infiniteScroll.disabled = true;
        return; // Detenemos la ejecución para que no se muestre ninguno más o será realmente infinito.
      }

      // definimos un nuevo array de 20 posiciones:
      const nuevoArr = Array(20);
      // Y lo agregamos al array que estamos listado en la app:
      this.data.push(...nuevoArr);
      // Una vez se muestra los nuevos registros se cancela la carga nueva:
      event.target.complete();
    }, 1000 );// simulamos relentización por carga
  }

}
