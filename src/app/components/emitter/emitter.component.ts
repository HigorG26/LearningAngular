import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber += 1;
    if (this.myNumber == 20) {
      this.myNumber = 0;
    }
  }
}
