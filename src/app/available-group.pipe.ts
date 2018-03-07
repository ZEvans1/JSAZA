import { Pipe, PipeTransform } from '@angular/core';
import { Group } from './group.model';

@Pipe({
  name: 'availableGroupPipe',
  pure: false
})
export class AvailableGroupPipe implements PipeTransform {

  transform(input: Group[], availableSelection) {
    let output: Group[] = [];
    switch (availableSelection) {
      case "false":
        for (let i = 0; i < input.length; i++) {
          if (input[i].available === "false") {
            output.push(input[i]);
          }
        }
        break;
        case "true":
          for (let i = 0; i < input.length; i++) {
            if (input[i].available === "true") {
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
