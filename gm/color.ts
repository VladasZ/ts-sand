import { Color as RaylibColor } from "raylib";

export class Color {
  constructor(
    public r: number,
    public g: number,
    public b: number,
    public a: number,
  ) {}

  get raylib(): RaylibColor {
    return {
      r: Math.round(this.r * 255),
      g: Math.round(this.g * 255),
      b: Math.round(this.b * 255),
      a: Math.round(this.a * 255),
    };
  }
}

export const RED = new Color(1, 0, 0, 1);
export const GREEN = new Color(0, 1, 0, 1);
export const BLUE = new Color(0, 0, 1, 1);
export const BLACK = new Color(0, 0, 0, 1);
