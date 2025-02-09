import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/models/Iuser';
import { UserDashService } from 'src/app/services/user-dash.service';
import { GetconfirmComponent } from '../../getconfirm/getconfirm.component';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  userId!: string;
  userobj!: Iuser;

  constructor(
    private _route: ActivatedRoute,
    private _userservice: UserDashService,
    private _matdialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getparamsid();
  }
  getparamsid() {
    // this.userId=this._route.snapshot.params['userId'];
    // this.userobj=this._userservice.getuserinfo(this.userId)

    this._route.params.subscribe((params: Params) => {
      this.userId = params['userId'];
      this.userobj = this._userservice.getuserinfo(this.userId);
    });
  }
  onRemove() {
    let matdialogref = this._matdialog.open(GetconfirmComponent);
    matdialogref.afterClosed().subscribe((res) => {
      if (res) {
        this._userservice.removeuser(this.userobj);
      }
    });
  }
}
