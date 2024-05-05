import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { PlatListComponent } from './components/plats/plat-list/plat-list.component';
import { PlatDetailsComponent } from './components/plats/plat-details/plat-details.component';
import { PlatAddComponent } from './components/plats/plat-add/plat-add.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminUserListComponent } from './components/admin/dashboard/admin-user-list/admin-user-list.component';
import { AdminPlatListComponent } from './components/admin/dashboard/admin-plat-list/admin-plat-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    AuthComponent,
    PlatListComponent,
    PlatDetailsComponent,
    PlatAddComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    UserDetailComponent,
    DashboardComponent,
    AdminUserListComponent,
    AdminPlatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
