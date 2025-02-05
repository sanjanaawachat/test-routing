import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsDashComponent } from './components/products-dash/products-dash.component';
import { UsersDashComponent } from './components/users-dash/users-dash.component';
import { UserinfoComponent } from './components/users-dash/userinfo/userinfo.component';
import { UserformComponent } from './components/users-dash/userform/userform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductinfoComponent } from './components/products-dash/productinfo/productinfo.component';
import { ProductformComponent } from './components/products-dash/productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PagenotfoundComponent,
    ProductsDashComponent,
    UsersDashComponent,
    UserinfoComponent,
    UserformComponent,
    ProductinfoComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
