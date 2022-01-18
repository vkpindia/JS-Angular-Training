import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    let formatedData = '';
    if(value =='M'){
      formatedData = 'Male';
    } else if(value =='F'){
      formatedData = 'Female';
    }
    return formatedData;
  }

}
