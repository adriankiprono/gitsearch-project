import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';

import { Username } from './username';
import { Repository } from './repository';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  myUsername:Username []=[];
  myRepository:Repository []=[];

  url='https://api.github.com/users/';
  token='?access_token=' + environment.token;

  constructor(public http:HttpClient) { }
  getUser(userName:string){
    interface data {
      name:string;
      avatar_url:any;
      followers_url:string;
      following_url:string;
      bio:string;
      link_url:string;
      repos:string;
    }
    let promise = new Promise ((resolve,reject)=>{
      this.myUsername=[];
      this.http.get<data>(this.url+userName+this.token)
      .toPromise().then(
        (result)=>{
        this.myUsername.push(result);
        resolve();
      },
      (error)=>{
        reject();
  
      })
    })
    return promise;
    }
   getRepo(userName:string){
      interface repositoryData{
        name:string;
        description:string;
        language:string;
        fork:string;
        link_url:string;

      }
      let promise = new Promise ((resolve, reject)=>{
        this.myRepository=[];
        this.http.get<repositoryData>(this.url+userName+"/repos"+this.token).toPromise().then(
        (result)=>{
          console.log(result);
          
          this.myRepository.push(result);
          resolve();

        },
        (error)=>{
          reject();
        })
      })
    
    return promise;
      
  }       

  }

  
  




