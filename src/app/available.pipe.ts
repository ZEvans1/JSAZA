import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './artist.model';

@Pipe({
  name: 'availablePipe',
  pure: false
})
export class AvailablePipe implements PipeTransform {

  transform(input: Artist[], availableSelection) {
    let output: Artist[] = [];
    switch (availableSelection) {
      case "false":
        for (let i = 0; i < input.length; i++) {
          if (input[i].available.toString() === "false") {
            output.push(input[i]);
          }
        }
        break;
        case "true":
          for (let i = 0; i < input.length; i++) {
            if (input[i].available.toString() === "true") {
              output.push(input[i]);
            }
          }
          break;
      default:
        output = input;
        break;
    }
    return output;
  }

}
