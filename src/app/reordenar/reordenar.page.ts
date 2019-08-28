import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reordenar',
  templateUrl: './reordenar.page.html',
  styleUrls: ['./reordenar.page.scss'],
})
export class ReordenarPage implements OnInit {
  personajes = ['Iron Man', 'Hulk', 'Spiderman', 'Capitana Marvel', 'Capitán América', 'Thor'];

  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }

  // Imprimimos en consola el array:
  onClick(){
    console.log(this.personajes);
  }

}
