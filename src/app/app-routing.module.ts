import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { AuthGuard } from './AuthenticationGuards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '' , redirectTo:'sign-in', pathMatch: 'full' },
  { path: 'sign-in' , component : SignInComponent },
  { path: 'sign-up' , component : SignUpComponent},
  { path: 'dashboard' , component : DashboardComponent , canActivate:[AuthGuard]},
  
  { path: 'customers', canActivate:[AuthGuard], loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) }, 
  { path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule) },
  { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
  { path: 'users',canActivate:[AuthGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  { path: 'services', canActivate:[AuthGuard], loadChildren: () => import('./services/services.module').then(m => m.ServicesModule) },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
