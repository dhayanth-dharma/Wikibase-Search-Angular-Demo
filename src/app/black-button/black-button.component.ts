import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-black-button',
  templateUrl: './black-button.component.html',
  styleUrls: ['./black-button.component.css']
})
export class BlackButtonComponent implements OnInit {
  @Input()
  buttonText: string = "Pay";
  @Output()
  buttonStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  buttonState: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  stateChange(event) {
    this.buttonState = !this.buttonState;
    this.buttonStateChange.emit(this.buttonState);
  }
}
