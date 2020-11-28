import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { FirebaseServiceService } from './../api/firebase-service.service';
import { IWebPage } from './../const/object.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  userForm: FormGroup;
  private dbPath = '/savedUrls';
  webpages: any;
  loading: boolean = false;
  constructor(private firebaseServiceService: FirebaseServiceService,
    private fb: FormBuilder) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      url: ['', [Validators.required,
      Validators.pattern(reg)]]
    });
  }
  //retrieving all web pages from firestore
  ngOnInit() {
    this.firebaseServiceService.getList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.webpages = data;
    });
  }
  //Creating webpages
  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      this.firebaseServiceService.create(this.userForm.value as IWebPage);
      this.loading = false;
    }, 3000);

  }
  deletItem(item) {
    this.loading = true;
    setTimeout(() => {
      this.firebaseServiceService.delete(item.key)
        .catch(err => console.log(err));
      this.loading = false;
    }, 3000);

  }
  onLinkClick(webpage) {
    if (webpage.url.includes("https://")) {
      window.open(webpage.url, "_blank");
    } else {
      window.open("https://" + webpage.url, "_blank");
    }
  }
}
