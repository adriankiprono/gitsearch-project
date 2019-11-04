import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  @Output() searchFor =new EventEmitter<any>()
  userName:string
  searchName(){
    this.searchFor.emit(this.userName);  
  }
  constructor() { }
  
  ngOnInit() {
  }
}
