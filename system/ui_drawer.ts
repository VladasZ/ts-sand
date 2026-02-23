import r from "raylib";

import { View } from "../ui";

export class UIDrawer {
  static draw_view(view: View) {
    r.DrawRectangle(
      view.rect.x,
      view.rect.y,
      view.rect.width,
      view.rect.height,
      view.color.raylib,
    );
  }
}
