import { SettingHomeComponent } from './wiki-search/home/home.component';
import { WikiDataComponent } from './wiki-search/wiki-data/wiki-data.component';
import { DbpediaComponent } from './wiki-search/dbpedia/dbpedia.component';
import { DataComponent } from './data/data.component';
import { SettingComponent } from './setting/setting.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Defining routes
const routes: Routes = [
    //All empty url match home route
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'setting', component: SettingComponent,
        children: [
            {
                path: '',
                loadChildren: './wiki-search/wiki.module#WikiModule'
            }
        ]
    },
    { path: 'data', component: DataComponent },
    // {
    //     path: 'setting/home',
    //     component: SettingHomeComponent
    // },
    // {
    //     path: 'setting/dbpedia',
    //     component: DbpediaComponent
    // },
    // {
    //     path: 'setting/wiki',
    //     component: WikiDataComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    // { useHash: true }
    exports: [RouterModule]
})
export class AppRoutingModule { }
