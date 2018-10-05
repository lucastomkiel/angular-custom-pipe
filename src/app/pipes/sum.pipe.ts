import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(value: any, first: any, second: any): any {
    return first + second;
  }

}
