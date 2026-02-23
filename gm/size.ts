export class Size {
  constructor(
    public width: number,
    public height: number,
  ) {}

  square(): number {
    return this.width * this.height;
  }
}
