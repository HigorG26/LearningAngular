import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-two-way-biding',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './two-way-biding.component.html',
  animations: [
    trigger('fadeSlideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ]
})
export class TwoWayBidingComponent {
  name: string = '';
  isSubmitted: boolean = false;

  onSubmit() {
    if (this.name.trim()) {
      this.isSubmitted = true;
      // Adicione aqui qualquer lógica adicional necessária
    }
  }
}
