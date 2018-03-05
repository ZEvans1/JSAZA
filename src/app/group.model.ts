export class Group {
  id: string = "";
  profileImage: string = "";
  profileGallery: string[] = [""];

  constructor(public name: string, public location: string, public genre: string[], public members: string[], public bio: string, public lookingFor: string[], public available: boolean) {}
}
