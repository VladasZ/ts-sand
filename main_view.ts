import { BLUE, GREEN, Rect, RED } from "./gm";
import { View } from "./ui";
import { AnimTimer } from "./ui/anim_timer";
import { UIAnimation } from "./ui/ui_animation";

export class MainView extends View {
  override setup() {
    this.frame = Rect.new(100, 100, 400, 180);
    this.color = BLUE;

    const view2 = this.add_subview(new View(Rect.new(10, 10, 200, 100)));
    view2.color = GREEN;
    
    const anim2 = new UIAnimation(AnimTimer.new(5, 65, 2, true), (view, value) => {
      view.frame.y = value;
    });
    
    view2.animations.push(anim2);

    const view3 = view2.add_subview(new View(Rect.new(20, 48, 50, 50)));
    view3.color = RED;

    const anim3 = new UIAnimation(AnimTimer.new(5, 140, 1.5, true), (view, value) => {
      view.frame.x = value;
    });

    view3.animations.push(anim3);
  }
}
