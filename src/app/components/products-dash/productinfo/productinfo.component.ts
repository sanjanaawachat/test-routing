import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/models/Iproduct';
import { ProdDashService } from 'src/app/services/prod-dash.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.scss'],
})
export class ProductinfoComponent implements OnInit {
  prodobj!: Iproduct;
  productId!: string;

  constructor(
    private _prodservice: ProdDashService,
    private _route: ActivatedRoute,
    private _matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getparamsId();
  }
  getparamsId() {
    //proid
    //api call to get single  product

    // this.productId=  this._route.snapshot.params['prodId'];
    // this.prodobj=this._prodservice.getproduct(this.productId)
    this._route.params //we can get value of observable
      .subscribe((params: Params) => {
        console.log(params);
        this.productId = params['prodId'];
        this.prodobj = this._prodservice.getproduct(this.productId);
      });
  }
  onproRemove() {
    // Id and Api call
    let matdialogref = this._matdialog.open(GetconfirmComponent);
    matdialogref.afterClosed().subscribe((res) => {
      if (res) {
        this._prodservice.onremovepro(this.productId);
      }
    });
  }
}
