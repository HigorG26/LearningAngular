import { Component } from '@angular/core';
import { Animal } from 'src/app/interface/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent {
  animals:Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
  }

  removeAnimal(animal: Animal){
    console.log("Animal removido!")
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => this.animals = animals);
  }
}
