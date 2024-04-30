import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent,title:"HomePage"},
    {path:"aboutUs", component:AboutUsComponent, title:"About Us"},
    {path:"**", component:PageNotFoundComponent, title:"Page Not Found"} // wildCard Route 
];
