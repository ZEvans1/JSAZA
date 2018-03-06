export class Artist {

  uid: string;
  profileImage: string = "";
  gallery: string[] = [""];
  messages: Object[] = [
    {
      senderId: "test0",
      content: "this is a test message!"
    }
  ];

  constructor(
    public name: string,
    public location: string,
    public instruments: string[],
    public genres: string[],
    public bio: string,
    public lookingFor: string[],
    public available: boolean,
    public currentGroups: string[],
    public formerGroups: string[]) {}

}
