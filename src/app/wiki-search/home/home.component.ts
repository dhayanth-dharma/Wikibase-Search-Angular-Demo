import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class SettingHomeComponent implements OnInit {

  dataItem: any[] = [];
  dataImage: any;
  imageURL: string = "";
  dataItemDBP: any[] = [];
  dataImageDBP: any;
  imageLoaded: any = false;
  searchTermWK: string = "";
  searchTermDBP: string = "";
  searchClassDBP: string = "";
  getToTheWIKI: string = "";
  mainText: any = "";
  card_title: any = "";

  max = 10;
  rate = 7;
  isReadonly = false;
  x: number = 5;
  y: number = 2;

  constructor(private homeServiece: HomeService) { }

  ngOnInit(): void {
  }
  //rating system
  confirmSelection(event: KeyboardEvent) {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.isReadonly = true;
    }
  }

  resetStars() {
    this.rate = 0;
    this.isReadonly = false;
  }

  getData(getSearchString: string) {

    this.homeServiece.getData2(getSearchString)
      .subscribe((res: any) => {
        console.log();

        this.dataItem = res.body.query.search;
        this.card_title = this.dataItem[0].title;
        this.mainText = this.dataItem[0].snippet;
      });
  }

  getImageURL() {
    this.homeServiece.getImage(this.searchTermWK)
      .subscribe(res => {
        this.imageURL = res.body.query.pages[Object.keys(res.body.query.pages)[0]].original.source;
        if (this.imageURL != null || this.imageURL != "") {
          this.imageLoaded = true;
        }
        else {
          this.imageLoaded = false;
        }
      })
  }

  searchClickWiki() {
    this.imageLoaded = false;
    this.getData(this.searchTermWK);
    this.getImageURL();
  }
  searchClickDBP() {
    this.homeServiece
      .getDBPediaAnother(this.searchTermDBP, this.searchClassDBP)
      .subscribe((res: any) => {
        console.log();
        this.dataItemDBP = res.body.results;
      });
  }

}
