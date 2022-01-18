import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], serachText: string, propName: string): any[] {
    if(!serachText) return value;
    if(value && !value.length) return [];

    let data = value.filter(item=> item[propName].includes(serachText));
    return data;
  }

}
