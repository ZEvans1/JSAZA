import { Pipe, PipeTransform } from '@angular/core';
import { Group } from './group.model';

@Pipe({
  name: 'lookingForPipe',
  pure: false
})
export class LookingForPipe implements PipeTransform {

  transform(input: Group[], lookingForSelection) {
    var output: Group[] = [];
    switch (lookingForSelection) {
      case "drums":
        for (let i = 0; i < input.length; i++) {
          if (input[i].lookingFor.includes(lookingForSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "bass":
        for (let i = 0; i < input.length; i++) {
          if (input[i].lookingFor.includes(lookingForSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "guitar":
        for (let i = 0; i < input.length; i++) {
          if (input[i].lookingFor.includes(lookingForSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "vocals":
        for (let i = 0; i < input.length; i++) {
          if (input[i].lookingFor.includes(lookingForSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "keyboard":
        for (let i = 0; i < input.length; i++) {
          if (input[i].lookingFor.includes(lookingForSelection)) {
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
