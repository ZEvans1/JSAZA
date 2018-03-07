
export class Artist {
  profileImage: string = "https://www.bookmydesign.com/auth-image/medium/blank-user.png?resize=202%2C60";
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
    public instruments: string[],
    public genres: string[],
    public tagline: string,
    public bio: string,
    public lookingFor: string[],
    public available: boolean,
    public groups: object) {}

}
