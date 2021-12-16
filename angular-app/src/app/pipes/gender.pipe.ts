import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: any,  key?: string): string {
    let valueType = '';
    if(key=='gender'){
      if(value=='M'){
        valueType='Male';
      } else if(value=='F') {
        valueType= 'Female';
      }
    } else {
      valueType = value;
    }
    return valueType;
  }

}
