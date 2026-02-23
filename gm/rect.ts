import { Point } from "./point";

export class Rect {
  constructor(
    public origin: Point,
    public size: Point,
  ) {}

  static new(x: number, y: number, width: number, height: number): Rect {
    return new Rect(new Point(x, y), new Point(width, height));
  }

  get x(): number {
    return this.origin.x;
  }
  set x(val: number) {
    this.origin.x = val;
  }

  get y(): number {
    return this.origin.y;
  }
  set y(val: number) {
    this.origin.y = val;
  }

  get width(): number {
    return this.size.x;
  }
  set width(val: number) {
    this.size.x = val;
  }

  get height(): number {
    return this.size.y;
  }
  set height(val: number) {
    this.size.y = val;
  }
}
