import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-wiki-data',
  templateUrl: './wiki-data.component.html',
  styleUrls: ['./wiki-data.component.css']
})
export class WikiDataComponent implements OnInit {

  imageURL: string = "";
  dataItemDBP: any[] = [];
  dataImageDBP: any;
  getToTheWIKI: any;
  imageLoaded: boolean = false;
  searchTermWK: string = "";
  searchTermDBP: string = "";
  searchClassDBP: string = "";
  dataItem: any[] = [];
  dataImage: any;
  mainText: any = "";
  card_title: any = "";
  constructor(private homeServiece: HomeService) { }

  ngOnInit(): void {
    this.imageLoaded = false;
  }

  getData(getSearchString: string) {
    debugger
    this.homeServiece.getData2(getSearchString)
      .subscribe((res: any) => {
        console.log();
        debugger
        this.dataItem = res.body.query.search;
        this.card_title = this.dataItem[0].title;
        this.mainText = this.dataItem[0].snippet;
      });
  }

  getImageURL() {
    this.homeServiece.getImage(this.searchTermWK)
      .subscribe(res => {
        debugger

        let id = Object.keys(res.body.query.pages)[0];
        this.imageURL = res.body.query.pages[id].original.source;
        if (this.imageURL != null || this.imageURL != "") {
          this.imageLoaded = true;
        }
        else {
          this.imageLoaded = false;
        }
      })
  }

  searchClickWiki() {
    debugger
    this.imageLoaded = false;
    this.getData(this.searchTermWK);
    this.getImageURL();

  }
}
