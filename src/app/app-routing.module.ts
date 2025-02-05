import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";


import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { UsersDashComponent } from "./components/users-dash/users-dash.component";
import { ProductsDashComponent } from "./components/products-dash/products-dash.component";
import { UserinfoComponent } from "./components/users-dash/userinfo/userinfo.component";
import { UserformComponent } from "./components/users-dash/userform/userform.component";
import { ProductinfoComponent } from "./components/products-dash/productinfo/productinfo.component";
import { ProductformComponent } from "./components/products-dash/productform/productform.component";


const appRoutes:Routes=[
    //http://localhost/4200/
    {
        path:'',//baseurl
        component:HomeComponent,
        title:"HOME"
    },
    {
        path:'home',      //http://localhost/4200/home
        component:HomeComponent,
        title:"HOME"
    },
  
    {
        path:'users',      //http://localhost/4200/home
        component:UsersDashComponent,
        title:"USERS"
    },
    {
        path:'users/adduser',      //http://localhost/4200/home
        component:UserformComponent,
        title:"USERS"
    },
    {
        path:'users/:userId',      //http://localhost/4200/home
        component:UserinfoComponent,
        title:"USERS"
    },
    {
        path:'users/:userId/edituser',      //http://localhost/4200/home
        component:UserformComponent,
        title:"USERS"
    },
    {
        path:'products',      //http://localhost/4200/home
        component:ProductsDashComponent,
        title:"PRODUCTS"
    },
    {
        path:'products/addproduct',      //http://localhost/4200/home
        component:ProductformComponent,
        title:"PRODUCTS"
    },
    {
        path:'products/:prodId',      //http://localhost/4200/home
        component:ProductinfoComponent,
        title:"PRODUCTS"
    },
    {
        path:'products/:prodId/editproduct',      //http://localhost/4200/home
        component:ProductformComponent,
        title:"PRODUCTS"
    },
  
    {
        path:'pagenotfound',   //http://localhost/4200/products
        component:PagenotfoundComponent,
        title:"PRODUCTS"
    },
    {
        path:'**',   //wild card
        redirectTo:'pagenotfound',
   
    }
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}



//params:change :/userid
//paramertes:value changes