export class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}

  square(): number {
    return this.x * this.y;
  }
}
