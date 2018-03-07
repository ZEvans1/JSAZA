import { Pipe, PipeTransform } from '@angular/core';
import { Group } from './group.model';

@Pipe({
  name: 'genreGroupPipe',
  pure: false
})
export class GenreGroupPipe implements PipeTransform {

  transform(input: Group[], genreSelection){
    var output: Group[] = [];
    switch (genreSelection) {
      case "pop":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "rock":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "country":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "jazz":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "classical":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "metal":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
            output.push(input[i]);
          }
        }
        break;
      case "blues":
        for (let i = 0; i < input.length; i++) {
          if (input[i].genre.includes(genreSelection)) {
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
