import { Point } from "./point";
import { Size } from "./size";

export class Rect {
  constructor(
    public origin: Point,
    public size: Size,
  ) {}

  static get default(): Rect {
    return new Rect(Point.default, Size.default);
  }

  get clone(): Rect {
    return Rect.new(this.x, this.y, this.width, this.height);
  }

  static new(x: number, y: number, width: number, height: number): Rect {
    return new Rect(new Point(x, y), new Size(width, height));
  }

  contains(point: Point): boolean {
    return (
      point.x >= this.x &&
      point.y >= this.y &&
      point.x <= this.x + this.width &&
      point.y <= this.y + this.height
    );
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
    return this.size.width;
  }
  set width(val: number) {
    this.size.width = val;
  }

  get height(): number {
    return this.size.height;
  }
  set height(val: number) {
    this.size.height = val;
  }
}
