import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';
import { Username } from '../username'
import { Repository } from '../repository'

@Component({
  selector: 'app-dispalyinfo',
  templateUrl: './dispalyinfo.component.html',
  styleUrls: ['./dispalyinfo.component.css']
})
export class DispalyinfoComponent implements OnInit {
  username:Username[];
  repository:Repository[];

  constructor( ) { }

  ngOnInit() {
  }
  

}
