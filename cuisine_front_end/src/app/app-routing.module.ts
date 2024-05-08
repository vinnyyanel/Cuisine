import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthComponent } from './components/auth/auth.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { PlatListComponent } from './components/plats/plat-list/plat-list.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { PlatDetailsComponent } from './components/plats/plat-details/plat-details.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { PlatAddComponent } from './components/plats/plat-add/plat-add.component';

const routes: Routes = [
  {
    path:'connexion',
    component:AuthComponent
  },
  {
    path:'dashboard/:id',
    component:DashboardComponent,
    canActivate:[authGuard]
  },
  {
    path:'inscription',
    component:UserAddComponent,
    canActivate:[authGuard]
  },
  {
    path:'index',
    component:HomeComponent
  },
  {
    path:'plat/:id',
    component:PlatDetailsComponent
  },
  {
    path:'user/:id',
    component:UserDetailComponent,
    canActivate:[authGuard]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
