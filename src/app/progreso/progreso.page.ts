import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
})
export class ProgresoPage implements OnInit {
  // pasamos el porcentaje a tipo number.
  porcentaje: number;

  constructor() { }

  ngOnInit() {
  }

  // Cargamos el metodo que captura el cambio de rango:
  cambioRango(event){
    console.log(event);
    // le pasamos al porcentaje el value y lo dividimos entre 100
    this.porcentaje = event.detail.value / 100;
  }

}
