import { Pipe, PipeTransform } from '@angular/core';
import { Artist } from './artist.model';

@Pipe({
  name: 'genrePipe',
  pure: false
})
export class GenrePipe implements PipeTransform {

  transform(input: Artist[], genreSelection){
    var output: Artist[] = [];
    switch (genreSelection) {
      case "pop":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "rock":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "country":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "jazz":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "classical":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "metal":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "blues":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genres.includes(genreSelection)) {
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
