import { BLUE, GREEN, Rect, RED } from "./gm";
import { View } from "./ui";

export class MainView extends View {
  override setup() {
    this.frame = Rect.new(100, 100, 400, 180);
    this.color = BLUE;

    const view2 = this.add_subview(new View(Rect.new(10, 10, 200, 100)));
    view2.color = GREEN;

    const view3 = view2.add_subview(new View(Rect.new(20, 48, 50, 50)));
    view3.color = RED;
  }
}
