import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoOneComponent } from './components/info-one/info-one.component';
import { InfoComponent } from './components/info/info.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [  
  {path : "main", component : MainContentComponent},
  {path : "home", component : HomeComponent},
  {path : "products", component : ProductsComponent},
  {path : "addCustomer", component:AddCustomerComponent},
  {path : "info", component : InfoComponent , children : [
    {path : "info-one", component : InfoOneComponent}
  ]},
  {path : "", redirectTo : "main", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
