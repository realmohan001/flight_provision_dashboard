import { Pipe, PipeTransform } from '@angular/core';

    

@Pipe({
  name: 'breakString'
})
export class BreakString implements PipeTransform {

  transform(value: string): string {

      return value.replace(/--/g, '<br/>');

 }
}