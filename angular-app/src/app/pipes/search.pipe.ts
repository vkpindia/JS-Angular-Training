import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchStr:string): any[] {
    if (!searchStr) return value;
    if(!value.length) return [];
    let data = value.filter(item=>item.Name.toLowerCase().includes(searchStr.toLowerCase()));
    return data;
  }

}
