import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreGroup'
})
export class GenreGroupPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
