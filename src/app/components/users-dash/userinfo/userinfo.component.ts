import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/models/Iuser';
import { UserDashService } from 'src/app/services/user-dash.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent implements OnInit {
  userId!: string;
  userobj!: Iuser;

  constructor(private _route:ActivatedRoute,private _userservice:UserDashService) { }

  ngOnInit(): void {
 this.userId=this._route.snapshot.params['userId'];
 this.userobj=this._userservice.getuserinfo(this.userId)
  }
  onRemove(){
    this._userservice.removeuser(this.userobj)
  }
}
