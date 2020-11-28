import { HttpClientModule } from '@angular/common/http';
import { WikiRoutingModule } from './wiki.routing.module';
import { WikiDataComponent } from './wiki-data/wiki-data.component';
import { DbpediaComponent } from './dbpedia/dbpedia.component';
import { SettingHomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        SettingHomeComponent,
        DbpediaComponent,
        WikiDataComponent],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        WikiRoutingModule
    ]
})
export class WikiModule { }