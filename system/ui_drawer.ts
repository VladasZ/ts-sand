import r from "raylib";

import { View } from "../ui";

export class UIDrawer {
  static draw_view(view: View) {
    let frame = view.absolute_frame;
    r.DrawRectangle(
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      view.color.raylib,
    );

    for (const subview of view.subviews) {
      UIDrawer.draw_view(subview);
    }
  }
}
