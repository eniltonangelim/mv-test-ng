import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByNome'
})
export class FilterByNomePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
