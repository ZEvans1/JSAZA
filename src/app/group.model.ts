export class Group {
  profileImage: string = "";
  gallery: string[] = [""];
  test: false;
  messages: Object[] = [
    {
      senderId: "0",
      content: "this is a test message!",
      timestamp: new Date().toString()
    }
  ];

  constructor(
    public name: string,
    public location: object,
    public genre: string[],
    public members: string[],
    public bio: string,
    public lookingFor: string[],
    public available: boolean
  ){}
}
 