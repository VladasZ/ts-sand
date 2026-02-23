export class Point {
  constructor(
    public x: number,
    public y: number,
  ) {}

  get clone(): Point {
    return new Point(this.x, this.y);
  }

  static get default(): Point {
    return new Point(0, 0);
  }

  square(): number {
    return this.x * this.y;
  }

  add(other: Point) {
    this.x += other.x;
    this.y += other.y;
  }
}
