import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/Iproduct';
import { ProdDashService } from 'src/app/services/prod-dash.service';

@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.scss'],
})
export class ProductsDashComponent implements OnInit {
  prodArr!: Array<Iproduct>;
  constructor(
    private _prodservice: ProdDashService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prodArr = this._prodservice.fetchallproducts();

    this._router.navigate([this.prodArr[0].prodId], {
      relativeTo: this._route,
      queryParams: {
        canEdit: this.prodArr[0].canreturn,
      },
    });
  }
  navigatetoproduct(prod: Iproduct) {
    this._router.navigate([prod.prodId], {
      queryParams: {
        canEdit: prod.canreturn,
      },
      relativeTo: this._route,
    });
  }
}
