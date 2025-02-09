import { Injectable } from '@angular/core';
import { Iproduct } from '../models/Iproduct';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class ProdDashService {
  prodArr: Array<Iproduct> = [
    {
      prodId: '123',
      pname: 'Samsung131',
      pstatus: 'In-progress',
      canreturn: 0,
    },
    {
      prodId: '124',
      pname: 'Laptop',
      pstatus: 'Delivered',
      canreturn: 1,
    },
    {
      prodId: '125',
      pname: 'Samsung131',
      pstatus: 'In-progress',
      canreturn: 0,
    },
    {
      prodId: '126',
      pname: 'Tab12',
      pstatus: 'Dispatched',
      canreturn: 1,
    },
    {
      prodId: '127',
      pname: 'Apple',
      pstatus: 'In-progress',
      canreturn: 0,
    },
    {
      prodId: '128',
      pname: 'Iphone',
      pstatus: 'Delivered',
      canreturn: 1,
    },
  ];
  constructor(private _router: Router, private _snackbar: SnackbarService) {}

  fetchallproducts(): Array<Iproduct> {
    //api call to all get products
    return this.prodArr;
  }
  getproduct(id: string): Iproduct {
    //get single product
    return this.prodArr.find((prod) => prod.prodId === id)!;
  }

  saveproduct(prod: Iproduct) {
    //api call to post prod obj

    this.prodArr.push(prod);
    this._snackbar.openSnackbar(
      `the proName is  ${prod.pname} is added successfully........`
    );
    this._router.navigate(['products']);
  }

  updateproduct(updateobj: Iproduct) {
    let getIndex = this.prodArr.findIndex(
      (prod) => prod.prodId === updateobj.prodId
    );
    this.prodArr[getIndex] = updateobj;
    this._snackbar.openSnackbar(
      `the updatedName is  ${updateobj.pname} is updated successfully........`
    );
    this._router.navigate(['products']);
  }

  onremovepro(removeId: string) {
    let getIndex = this.prodArr.findIndex((prod) => prod.prodId === removeId);
    this.prodArr.splice(getIndex, 1);
    this._snackbar.openSnackbar(
      `the pName is  is removed successfully........`
    );
    this._router.navigate(['products']);
  }
}
