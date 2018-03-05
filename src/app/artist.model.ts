export class Artist {

  profileImage: string = "";
  profileGallery: string[] = [""];

  constructor(public name: string, public location: string, public instruments: string[], public genres: string[], public bio: string, public lookingFor: string[], public available: boolean, public currentGroups: string[], public formerGroups: string[]) {}
}
