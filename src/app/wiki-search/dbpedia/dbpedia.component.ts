import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-dbpedia',
  templateUrl: './dbpedia.component.html',
  styleUrls: ['./dbpedia.component.css']
})
export class DbpediaComponent implements OnInit {
  dataItem: any[] = [];
  dataImage: any;
  dataItemDBP: any[] = [];
  dataImageDBP: any;
  searchTermWK: string = "";
  searchTermDBP: string = "";
  searchClassDBP: string = "";
  constructor(private homeServiece: HomeService) { }
  ngOnInit(): void {
  }
  searchClickDBP() {
    this.homeServiece
      .getDBPediaAnother(this.searchTermDBP, this.searchClassDBP)
      .subscribe((res: any) => {
        this.dataItemDBP = res.body.results;
      });
  }

}
