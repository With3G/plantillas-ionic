import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refrescar',
  templateUrl: './refrescar.page.html',
  styleUrls: ['./refrescar.page.scss'],
})
export class RefrescarPage implements OnInit {
  // Creamos un array vacio:
  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Cargamos el metodo que se ejecuta cuando refrescamos: 
  doRefresh(event){

    // Le pasamos un temporizador en el cual guardamos 40 posiciones al array de arriba:
    setTimeout(() =>{
      this.items = Array(40);
      // Tomamos el metodo complete para finaliar la carga:
      event.target.complete();
    }, 1500);
  }

}
