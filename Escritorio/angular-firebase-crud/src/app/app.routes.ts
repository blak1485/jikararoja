import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditUserResolver } from './edit-user/edit-user.resolver';
import { StoreComponent } from './store/store.component';
import { PaginaComponent } from './pagina/pagina.component';
import { BuyComponent } from './buy/buy.component';

export const rootRouterConfig: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'store', component: StoreComponent },

  { path: 'buy', component: BuyComponent},
  { path: 'pagina', component: PaginaComponent },

  { path: 'details/:id', component: EditUserComponent, resolve:{data : EditUserResolver} }
];
