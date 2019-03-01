import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
