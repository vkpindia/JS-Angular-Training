import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePrefix'
})
export class TitlePrefixPipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(!gender) return value;

    if(gender=='M'){
      value =  'Mr.'+' '+ value
    } else if(gender=='F'){
      value = 'Mrs.'+' '+ value
    }
    return value;
  }

}
