import { Injectable } from '@angular/core';
import { Iuser } from '../models/Iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserDashService {

userArr:Array<Iuser>=[
  {
    userId:"123",
    userName:"jhon",
    userRole:"Candidate"
  },
  {
    userId:"124",
    userName:"doe",
    userRole:"Admin"
  },
  {
    userId:"125",
    userName:"rosw",
    userRole:"Candidate"
  },
  {
    userId:"126",
    userName:"khew",
    userRole:"Admin"
  },
  {
    userId:"127",
    userName:"Yedc",
    userRole:"Candidate"
  }
]
  constructor(private _router:Router) { }
fetchallusers():Array<Iuser>{
return this.userArr;
}

getuserinfo(id:string):Iuser{
  return this.userArr.find(user=>user.userId === id)!
}

adduser(user:Iuser){
this.userArr.push(user);
//api success //navigate to userdashboard
this._router.navigate(['users'])//bydefault abs path
}

updateuser(updateobj:Iuser){
let getIndex=this.userArr.findIndex(user=>user.userId===updateobj.userId)
this.userArr[getIndex]=updateobj;
this._router.navigate(['users'])
}

removeuser(userobj:Iuser){
let getIndex=this.userArr.findIndex(user=>user.userId=== userobj.userId)
this.userArr.splice(getIndex,1)
this._router.navigate(['users'])
}
}
