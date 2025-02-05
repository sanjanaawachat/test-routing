import { Injectable } from '@angular/core';
import { Iproduct } from '../models/Iproduct';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdDashService {
prodArr:Array<Iproduct>=[
  {
    prodId:"123",
    pname:"Samsung131",
    pstatus:"Inprogress",
    canreturn:0
  },
  {
    prodId:"124",
    pname:"Laptop",
    pstatus:"Delivered",
    canreturn:1
  },
  {
    prodId:"125",
    pname:"Samsung131",
    pstatus:"Inprogress",
    canreturn:0
  },
  {
    prodId:"126",
    pname:"Tab12",
    pstatus:"Dispatched",
    canreturn:1
  },
  {
    prodId:"127",
    pname:"Delivered",
    pstatus:"Inprogress",
    canreturn:0
  },
  {
    prodId:"128",
    pname:"Iphone",
    pstatus:"Delivered",
    canreturn:0
  }
]
  constructor(private _router:Router) { }

fetchallproducts():Array<Iproduct>{
  //api call to all get products
return this.prodArr;
  }
  getproduct(id:string):Iproduct{//get single product
return this.prodArr.find(prod=>prod.prodId===id)!
  }

  saveproduct(prod:Iproduct){
//api call to post prod obj

this.prodArr.push(prod);
this._router.navigate(['products'])
  }

  updateproduct(updateobj:Iproduct){
let getIndex=this.prodArr.findIndex(prod=>prod.prodId===updateobj.prodId);
this.prodArr[getIndex]=updateobj;
this._router.navigate(['products'])
  }
}
