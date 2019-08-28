import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.page.html',
  styleUrls: ['./formularios.page.scss'],
})
export class FormulariosPage implements OnInit {
  // Definimos los atributos que recibirán los datos de cada input:
  nombre: string;

  usuario = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  // Creamos el método que recibirá los datos del formulario y mostrará en consola los datos:
  onSubmitTemplate(){
    console.log("Formulario enviado");
    console.log(this.usuario);
  }

}
