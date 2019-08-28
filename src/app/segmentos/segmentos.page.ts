import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segmentos',
  templateUrl: './segmentos.page.html',
  styleUrls: ['./segmentos.page.scss'],
})
export class SegmentosPage implements OnInit {
  superHeroes: Observable<any>;
  // Creamos el atributo publisher que es el que mandamos al pipe:
  publisher = '';

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getheroes();
  }

  segmentChanged(event){
    console.log(event);
    const valorSegmento = event.detail.value;
    // Si el valorSegmento es igual a todos no asignamos nada:
    if( valorSegmento === 'todos'){
      this.publisher = '';
      return; // Y detenemos la ejecución con return para que no siga el método.
    }
    // Filtramos ahora segun el valorSegmento:
    this.publisher = valorSegmento;
  }

}
