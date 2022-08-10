import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "products", component: ProductsComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
