import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuePrefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: any, prefix?:string, keyName?:string): any {
    if(keyName=='Name'){
      return prefix?prefix+' '+value:'Mr.'+' '+value;
    } else {
      return value
    }
  }

}
