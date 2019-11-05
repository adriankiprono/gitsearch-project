import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {

  transform(value: any): number {
    
      let today:Date= new Date();
      let todayWithNoTime:any=new Date(today.getFullYear(), today.getMonth(), today.getDate())
      var dateDifference =Math.abs(value - todayWithNoTime)
      const secondsInADay=86400;
      var dateDifferenceSeconds=dateDifference*0.001;
      var dateDifference=Math.round(dateDifferenceSeconds/secondsInADay);
  
      if (dateDifference >= 1){
        return dateDifference;
      }else
        return 0;}
  
      
    }
  
    
  


