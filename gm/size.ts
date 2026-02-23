export class Size {
  constructor(
    public width: number,
    public height: number,
  ) {}

  static get default(): Size {
    return new Size(0, 0);
  }

  square(): number {
    return this.width * this.height;
  }
}
