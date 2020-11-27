import { FirebaseServiceService } from './../api/firebase-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private firebaseServiceService: FirebaseServiceService) { }

  ngOnInit(): void {
  }
  click() {
    alert("Hello");
    this.firebaseServiceService.click();
  }
}
