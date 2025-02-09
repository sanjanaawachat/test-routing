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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { GetconfirmComponent } from './components/getconfirm/getconfirm.component';
import { MatButtonModule } from '@angular/material/button';
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
    ProductformComponent,
    GetconfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
