import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/models/Iproduct';
import { ProdDashService } from 'src/app/services/prod-dash.service';
import { UuidService } from 'src/app/services/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
isInEditMode:boolean=false;
  productId!: string;
  prodform!: FormGroup;
  prodobj!:Iproduct
  constructor(private _route:ActivatedRoute,private _prodservice:ProdDashService,private _uuidservice:UuidService) { }

  ngOnInit(): void {
    this.setEditMode();
    this.createprodform();
  }
   
  setEditMode(){
 this.productId=this._route.snapshot.params['prodId'];
if (this.productId) {
  this.isInEditMode=true;
this.prodobj=this._prodservice.getproduct(this.productId);
console.log(this.prodobj);

let canreturn=this.prodobj.canreturn ? 'Yes'  :'No';
this.prodform.patchValue({...this.prodobj,canreturn:canreturn})

}else{
  this.isInEditMode=false;
}

  }

  
createprodform(){
this.prodform=new FormGroup({
      pname:new FormControl(null,[Validators.required]),
      pstatus:new FormControl(null,[Validators.required]),
      canreturn:new FormControl(null,[Validators.required])
    })
}

onproadd(){
  if (this.prodform.valid) {
   let canreturnval=this.prodform.value.canreturn ==="Yes" ? 1 : 0;
   console.log(canreturnval);
   
   let newprodobj={...this.prodform.value,canreturn:canreturnval, prodId:this._uuidservice.generateuuid()}
    console.log(newprodobj);
    this._prodservice.saveproduct(newprodobj)
    
  }


}
onupdate(){
    if (this.isInEditMode  && this.prodform.valid) {
      console.log('updated');
      let updateobj=this.prodform.value;
      console.log(updateobj);
      let canreturnval=this.prodform.value.canreturn ==="Yes" ? 1 : 0;
      console.log(canreturnval);
      let updatedobj:Iproduct={...this.prodform.value,canreturn:canreturnval,prodId:this.productId
      }
      this._prodservice.updateproduct(updatedobj)
    }
}
}

