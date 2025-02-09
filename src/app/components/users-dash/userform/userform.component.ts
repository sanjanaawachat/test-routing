import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iuser } from 'src/app/models/Iuser';
import { UserDashService } from 'src/app/services/user-dash.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  isInEditmode: boolean = false;
  userId!: string;
  usersForm!: FormGroup;
  edituserobj!: Iuser;
  mode: 'create' | 'edit' = 'create';
  updateBtnDisable: boolean = false;

  constructor(
    private _route: ActivatedRoute,
    private _uuidservice: UuidService,
    private _userservice: UserDashService
  ) {}

  ngOnInit(): void {
    this.createUserForm();
    this.setEditMode();
  }

  setEditMode() {
    this.userId = this._route.snapshot.params['userId'];
    if (this.userId) {
      this.isInEditmode = true;
      this.mode = 'edit';
      //userid
      //api call b yusing userid to get userobj
      this.edituserobj = this._userservice.getuserinfo(this.userId);
      this.usersForm.patchValue(this.edituserobj);
      console.log(this._route.snapshot.queryParams['userRole']);
      
      if (this._route.snapshot.queryParams['userRole'] === 'Candidate') {
        this.usersForm.disable();
        this.updateBtnDisable = true;
      }
    } else {
      this.isInEditmode = false;
      this.mode = 'create';
    }
  }

  createUserForm() {
    this.usersForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    });
  }
  onuseradd() {
    if (this.usersForm.valid) {
      console.log(this.usersForm.valid);

      //mode === cretae//add user
      //mode === edit //edit user
      if (this.mode === 'create') {
        let userobj = {
          ...this.usersForm.value,
          userId: this._uuidservice.generateuuid(),
        };

        console.log(userobj);
        this._userservice.adduser(userobj);
      } else if (this.mode === 'edit') {
        // console.log('update wala api calls');
        //updatedobj
        //
        let updateduser = { ...this.usersForm.value, userId: this.userId };
        this._userservice.updateuser(updateduser);
      }
    }
  }
}
