import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-search-switch',
  templateUrl: './search-switch.component.html',
  styleUrls: ['./search-switch.component.css']
})
export class SearchSwitchComponent {
  @Input() view:string ; 
  @Output() switchView:EventEmitter<string> = new EventEmitter() ; 

  switch(val:string) {
    this.switchView.emit(val) ; 
  }
}
