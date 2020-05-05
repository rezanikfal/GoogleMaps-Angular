import { Component, Inject, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showButton = true
  open() {
    this.showButton = false
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}