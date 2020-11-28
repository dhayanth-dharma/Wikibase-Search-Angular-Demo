import { WikiModule } from './wiki-search/wiki.module';
import { WikiDataComponent } from './wiki-search/wiki-data/wiki-data.component';
import { DbpediaComponent } from './wiki-search/dbpedia/dbpedia.component';
import { SettingHomeComponent } from './wiki-search/home/home.component';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BlackButtonModule } from './black-button/black-button.module';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SettingComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    NgbNavModule,
    BlackButtonModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    WikiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
