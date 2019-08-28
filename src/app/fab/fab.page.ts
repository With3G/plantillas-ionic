import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  // Generamos un array de 100 posiciones vacío:
  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
