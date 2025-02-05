import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/Iproduct';
import { ProdDashService } from 'src/app/services/prod-dash.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss']
})
export class ProductinfoComponent implements OnInit {
  prodobj!: Iproduct;
  productId!: string;

  constructor(private _prodservice:ProdDashService, private _route:ActivatedRoute) { }

  ngOnInit(): void {
    //proid
    //api call to get single  product
    
 this.productId=  this._route.snapshot.params['prodId'];
 this.prodobj=this._prodservice.getproduct(this.productId)
  }

}
