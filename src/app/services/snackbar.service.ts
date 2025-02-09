import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _matSnack: MatSnackBar) {}

  openSnackbar(msg: string) {
    let configobj: MatSnackBarConfig<any> = {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000,
    };
    this._matSnack.open(msg, 'close', configobj);
  }
}
