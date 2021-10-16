import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomersComponent } from './customers.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes = [{ path: '', component: CustomersComponent ,
children:[
  { path : 'list-customer',component : ListCustomerComponent},
  { path : 'add-customer', component : AddCustomerComponent},
  { path : 'list-customer/edit-customer/:id', component : EditCustomerComponent},
  { path : 'list-customer/delete-customer/:id', component : DeleteCustomerComponent},
  { path : 'list-customer/search-customer', component : SearchCustomerComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
