import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePrefix'
})
export class TitlePrefixPipe implements PipeTransform {

  transform(value: any, gender?:string): any {
    if(gender=='M'){
      return 'Mr.'+' '+value;
    } else {
      return 'Mrs.'+' '+value;
    }
  }

}

@Pipe({
  name: 'genders'
})
export class GendersPipe implements PipeTransform {

  transform(value: any): any {
    if(value=='M'){
      return 'Male';
    } else {
      return 'Female';
    }
  }

}
