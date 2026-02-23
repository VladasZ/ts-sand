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

  get is_began(): boolean {
    return this.event == TouchEvent.Began;
  }
}
