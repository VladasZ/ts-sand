import r from "raylib";

import { Touch, TouchEvent } from "./touch";
import { Point } from "../gm";
import { View } from "./view";

export class Input {
  static touch_listeners: WeakRef<View>[] = [];

  static check_touches() {
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

    for (const touch of touches) {
      for (const weak_view of this.touch_listeners) {        
        const view = weak_view.deref();
        if (!view) continue;

        if (view.absolute_frame.contains(touch.position)) {
          view.on_touch(touch);
        }
      }
    }
  }
}
