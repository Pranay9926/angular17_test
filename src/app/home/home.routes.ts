import { Routes } from '@angular/router';




export const routes2: Routes = [
    // {path:"", redirectTo:"home",pathMatch:"full"},
    // {path:"home",component:HomeComponent,title:"HomePage"},
    // {path:"aboutUs", component:AboutUsComponent, title:"About Us"},
    {path:"aboutUs", loadComponent:()=> import('../about-us/about-us.component').then(m => m.AboutUsComponent)},
    // different outlet2
    // {path:"newoutlet",component:AboutUsComponent,outlet:"outlets2"},

    // {path:"**", component:PageNotFoundComponent, title:"Page Not Found"} ,// wildCard Route 

];