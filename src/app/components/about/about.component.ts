import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  selectedImage: string | null = null;

  openImagePopup(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImagePopup() {
    this.selectedImage = null;
  }
}
