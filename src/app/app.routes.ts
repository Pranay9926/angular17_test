import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { routes2 } from './home/home.routes';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent,title:"HomePage",children:routes2},
    // {path:"aboutUs", component:AboutUsComponent, title:"About Us"},
    // different outlet2
    // {path:"newoutlet",component:AboutUsComponent,outlet:"outlets2"},

    {path:"**", component:PageNotFoundComponent, title:"Page Not Found"} ,// wildCard Route 

];
