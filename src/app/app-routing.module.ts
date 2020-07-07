import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {ProductlistComponent} from './productlist/productlist.component';
import {AboutComponent} from './about/about.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"home",
    component:HomeComponent

  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"product",
    component:ProductlistComponent
  },
  {
    path:"product/:id",
    component:ProductlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
