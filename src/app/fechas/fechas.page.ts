import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.page.html',
  styleUrls: ['./fechas.page.scss'],
})
export class FechasPage implements OnInit {
  fechaNaci: Date = new Date();
  // Creamos dos nuevos atributos para las fechas:
  customPickerOptions;
  customDate;

  constructor() { }

  ngOnInit() {
    // Vamos a especificar los valores por defecto de los nuevos atributos:
    this.customPickerOptions = {
      buttons: [{
        text: 'Guardar',
        handler: ( evento ) => { // Le pasamos un evento que será la fecha y la imprimimos.
          console.log('Clicked save!');
          console.log("Fecha: ", evento);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]
    };
  }

  cambioFecha(event){
    console.log('IonChange: ', event);
    console.log('Fecha: ', new Date(event.detail.value));
  }

}
