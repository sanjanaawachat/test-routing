import { Component, OnInit } from '@angular/core';
import { Iuser } from 'src/app/models/Iuser';
import { UserDashService } from 'src/app/services/user-dash.service';

@Component({
  selector: 'app-users-dash',
  templateUrl: './users-dash.component.html',
  styleUrls: ['./users-dash.component.scss']
})
export class UsersDashComponent implements OnInit {
  userArr!: Array<Iuser>;
  constructor(private _userservice:UserDashService) { }

  ngOnInit(): void {
this.userArr=this._userservice.fetchallusers();
  }

}
