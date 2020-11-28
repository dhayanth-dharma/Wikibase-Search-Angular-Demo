import { DbpediaComponent } from './dbpedia/dbpedia.component';
import { WikiDataComponent } from './wiki-data/wiki-data.component';
import { SettingHomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        component: SettingHomeComponent
    },
    {
        path: 'wiki',
        component: WikiDataComponent
    },
    {
        path: 'dp-pedia',
        component: DbpediaComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WikiRoutingModule { }