import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showmenu = false;
  constructor() { }

  ngOnInit(): void {
  }
  displaymenu() {

    this.showmenu = !this.showmenu;
  }
}
