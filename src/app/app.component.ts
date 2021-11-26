import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navDestination: string = 'recipes';

  onNavFired(navDestinationInput: string) {
    this.navDestination = navDestinationInput;
  }
}
