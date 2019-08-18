import { Component } from "@angular/core";
import { environment } from '../environments/environment'

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = 'dnd2';

  open = environment.production;
  toggle(e: Event) {
      e.preventDefault();
      this.open = !this.open;
  }
}
