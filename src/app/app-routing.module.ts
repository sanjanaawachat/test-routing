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
        title:"USERS",
        children:[
            {
                path:'adduser',      //http://localhost/4200/adduser
                component:UserformComponent,
                title:"USERS"
            },
            {
                path:':userId',      //http://localhost/4200/123
                component:UserinfoComponent,
                title:"USERS"
            },
            {
                path:':userId/edituser',      //http://localhost/4200/123/edituser
                component:UserformComponent,
                title:"USERS"
            },
        ],
        canActivate:[]
    },
   
    {
        path:'products',      //http://localhost/4200/home
        component:ProductsDashComponent,
        title:"PRODUCTS",
        children:[
            {
                path:'addproduct',      //http://localhost/4200/home
                component:ProductformComponent,
                title:"PRODUCTS"
            },
            {
                path:':prodId',      //http://localhost/4200/home
                component:ProductinfoComponent,
                title:"PRODUCTS"
            },
            {
                path:':prodId/editproduct',      //http://localhost/4200/home
                component:ProductformComponent,
                title:"PRODUCTS"
            },
        ]
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