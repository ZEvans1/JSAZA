import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './artist.model';

@Pipe({
  name: 'instrumentPipe',
  pure: false
})
export class InstrumentPipe implements PipeTransform {

  transform(input: Artist[], instrumentSelection) {
    var output: Artist[] = [];
    switch (instrumentSelection) {
      case "drums":
        for (let i = 0; i < input.length; i++) {
          if (input[i].instruments.includes(instrumentSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "bass":
        for (let i = 0; i < input.length; i++) {
          if (input[i].instruments.includes(instrumentSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "guitar":
        for (let i = 0; i < input.length; i++) {
          if (input[i].instruments.includes(instrumentSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "voice":
        for (let i = 0; i < input.length; i++) {
          if (input[i].instruments.includes(instrumentSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "keyboard":
        for (let i = 0; i < input.length; i++) {
          if (input[i].instruments.includes(instrumentSelection)) {
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
