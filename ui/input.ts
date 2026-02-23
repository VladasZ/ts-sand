import r from "raylib";

import { Touch, TouchEvent } from "./touch";
import { Point } from "../gm";

export class Input {
  static get_touches(): Touch[] {
    const touches: Touch[] = [];

    const mousePos = r.GetMousePosition();
    const point = new Point(mousePos.x, mousePos.y);

    if (r.IsMouseButtonPressed(r.MOUSE_BUTTON_LEFT)) {
      touches.push(new Touch(point, TouchEvent.Began));
    } else if (r.IsMouseButtonReleased(r.MOUSE_BUTTON_LEFT)) {
      touches.push(new Touch(point, TouchEvent.Ended));
    } else if (r.IsMouseButtonDown(r.MOUSE_BUTTON_LEFT)) {
      const delta = r.GetMouseDelta();
      if (delta.x !== 0 || delta.y !== 0) {
        touches.push(new Touch(point, TouchEvent.Moved));
      }
    }

    return touches;
  }
}
