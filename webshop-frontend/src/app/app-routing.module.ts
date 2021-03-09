import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { ItemAddComponent } from './item/item-add/item-add.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // AINULT NEED ROUTE'd ON OLEMAS, MIS ON SIIN
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: ItemListComponent },
  { path: "admin", component: AdminComponent },
  { path: "item/edit/:itemId", component: ItemEditComponent },
  { path: "item/view", component: ItemViewComponent },
  { path: "item/add", component: ItemAddComponent },
  { path: "cart", component: CartComponent },
  // KÕIK ÜLEJÄÄNUD ROUTE'd
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
