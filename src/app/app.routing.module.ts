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
    { path: 'setting', component: SettingComponent },
    { path: 'data', component: DataComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    // { useHash: true }
    exports: [RouterModule]
})
export class AppRoutingModule { }
