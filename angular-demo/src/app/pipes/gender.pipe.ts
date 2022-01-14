import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    let formatedData = '';
    if(value.toLocaleLowerCase() =='m'){
      formatedData = 'Male';
    } else if(value.toLocaleLowerCase() =='f'){
      formatedData = 'Female';
    }
    return formatedData;
  }

}
