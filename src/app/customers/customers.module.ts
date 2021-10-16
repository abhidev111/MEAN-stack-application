import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
  


@NgModule({
  declarations: [
    CustomersComponent,
    AddCustomerComponent,
    DeleteCustomerComponent,
    EditCustomerComponent,
    ListCustomerComponent,
    SearchCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  
})
export class CustomersModule { }
