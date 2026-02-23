import { Touch } from "../touch";
import { View } from "../view";

export class Button extends View {
  on_tap: () => void = () => {};

  override setup() {
    this.enable_touch();
  }

  override on_touch(touch: Touch): void {
    if (touch.is_began) {
      this.on_tap();
    }
  }
}
