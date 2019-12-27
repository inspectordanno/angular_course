import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value) {
    value.sort((a, b) => b.instanceType.localeCompare(a.instanceType));
    return value;
  }

}
