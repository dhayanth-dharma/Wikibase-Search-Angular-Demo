import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // buttonState
  state: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onPayChange(state: boolean) {
    this.state = state;
  }

}
