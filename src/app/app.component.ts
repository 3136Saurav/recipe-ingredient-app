import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'recipe'
  title = 'kitchen-app';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
