import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _route:Router) { }

  ngOnInit(): void {
  }
  onbtnClick(){
     this._route.navigate(['products'])
  }
}
