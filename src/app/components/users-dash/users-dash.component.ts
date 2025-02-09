import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/models/Iuser';
import { UserDashService } from 'src/app/services/user-dash.service';

@Component({
  selector: 'app-users-dash',
  templateUrl: './users-dash.component.html',
  styleUrls: ['./users-dash.component.scss'],
})
export class UsersDashComponent implements OnInit {
  userArr!: Array<Iuser>;
  constructor(
    private _userservice: UserDashService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userArr = this._userservice.fetchallusers();

    this._router.navigate([this.userArr[0].userId], {
      relativeTo: this._route,
      queryParams:{
        userRole:this.userArr[0].userRole
      }
    });
  }
}
