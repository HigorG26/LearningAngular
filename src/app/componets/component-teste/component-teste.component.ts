import { Component } from '@angular/core';

@Component({
  selector: 'app-component-teste',
  templateUrl: './component-teste.component.html',
  styleUrls: ['./component-teste.component.css']
})
export class ComponentTesteComponent {
  name = 'Higuinho';
  age:number = 30;
  job = 'Programador;'
  hobbies = ['correr', 'jogar', 'estudar']

  car = {
    name: 'HB20',
    placa: 'HGF2601'

  }

  constructor() {}

  ngOnInit(): void {}

}
