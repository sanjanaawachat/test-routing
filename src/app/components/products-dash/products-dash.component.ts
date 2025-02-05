import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/Iproduct';
import { ProdDashService } from 'src/app/services/prod-dash.service';

@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.scss']
})
export class ProductsDashComponent implements OnInit {
  prodArr!: Array<Iproduct>;
  constructor(private _prodservice:ProdDashService) { }

    ngOnInit(): void {
    this.prodArr=this._prodservice.fetchallproducts();
  }

}
