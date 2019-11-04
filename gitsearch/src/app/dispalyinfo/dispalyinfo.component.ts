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

  constructor( private kay:ServiceService) { }

  ngOnInit() {
    this.name('adriankiprono');

  }
  name(userName){
    this.kay.getUser(userName).then(
     (success)=>{
       this.username=this.kay.myUsername;
       console.log(this.username)
     },
     (error)=>{
       console.log(error)
     }
    );
    this.kay.getRepo(userName).then(
      (success)=>{
        this.repository=this.kay.myRepository;
        console.log(this.repository);
      },
      (error)=>{
       console.log(error) 
      }

    );
  }
  

}
