import { Point } from "../gm";

export enum TouchEvent {
  Began,
  Moved,
  Ended,
}

export class Touch {
  constructor(
    public position: Point,
    public event: TouchEvent,
  ) {}
}
