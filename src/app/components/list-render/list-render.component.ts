import { Component } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals:Animal[] = [
    { name: 'Caroço', type: 'Cachorro', age: 1 },
    { name: 'Caroça', type: '???', age: 2 },
    { name: 'Molho', type: 'Moda', age: 3 },
    { name: 'Civic', type: 'R', age: 4 },
    { name: 'Mosca', type: 'Chiquititas', age: 5 },
  ];

  constructor(private listService: ListService) {}

  removeAnimal(animal: Animal){
    console.log("Animal removido!")
    this.animals = this.listService.remove(this.animals, animal)
  }
}
