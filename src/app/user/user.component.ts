import { Component, OnInit } from '@angular/core';
import { gallery } from '../data/gallery';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gallery:Array<any> = gallery;

  constructor() { }

  ngOnInit() {
  }

}
