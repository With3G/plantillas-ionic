import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  // Nos creamos un atributo de tipo objeto para hacer un bucle de checkboxes:
  data = [
    {
      name: 'primary',
      selected: false
    }, {
      name: 'secondary',
      selected: true
    }, {
      name: 'tertiary',
      selected: false
    }, {
      name: 'success',
      selected: true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  // Creamos el método y le vamos a pasar por parámetros el checkbox:
  onClick(checkbox){
    console.log(checkbox);
  }

}
