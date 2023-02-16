import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() onClick = new EventEmitter<string>();

  plusClick(type: string) {
    console.log(type)
    this.onClick.emit(type);
  }
}
