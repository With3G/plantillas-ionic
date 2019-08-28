// Cargamos la librería Input del core:
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  // Vamos a recibir en nuestro componente una variable llamada título con el título de cada página:
  @Input() titulo: string;

  constructor() { }

  ngOnInit() {}

}
