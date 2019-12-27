import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string) {
    const arr = value.split('');
    const joined = arr.reverse()
      .join('')
    return joined;
  }

}
