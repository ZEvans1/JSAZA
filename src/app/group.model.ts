export class Group {
  profileImage: string = "https://image.flaticon.com/icons/svg/32/32441.svg";
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
    public tagline: string,
    public bio: string,
    public lookingFor: string[],
    public available: boolean
  ){}
}
