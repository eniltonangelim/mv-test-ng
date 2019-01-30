import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'idade'
})

export class IdadePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const dataNascimento = moment(value, 'YYYY-MM-DD')
      
    return moment().diff(dataNascimento, 'years');
  }

}
