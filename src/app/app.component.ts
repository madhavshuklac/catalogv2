import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-app';
  view:string = "list" ; 

  switchView(val:string) {
    this.view = val ; 
  }
}
