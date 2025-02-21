import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projeto-Angular';
  menuAberto = false;
  currentSlide = 0;
  
  navigationLinks = [
    { path: '/', label: 'Home' }
  ];

  constructor(public router: Router) {}

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }

  nextSlide() {
    const maxSlide = Math.ceil(this.navigationLinks.length / 3) - 1;
    this.currentSlide = this.currentSlide >= maxSlide ? 0 : this.currentSlide + 1;
  }

  previousSlide() {
    const maxSlide = Math.ceil(this.navigationLinks.length / 3) - 1;
    this.currentSlide = this.currentSlide <= 0 ? maxSlide : this.currentSlide - 1;
  }
}
