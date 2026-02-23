import { Color, Rect, WHITE } from "../gm";
import { UIAnimation } from "./ui_animation";

export class View {
  color: Color;
  frame: Rect;

  superview?: View;
  subviews: View[];

  animations: UIAnimation[];

  constructor(rect: Rect) {
    this.color = WHITE;
    this.frame = rect;
    this.subviews = [];
    this.animations = [];
  }

  setup() {}

  add_subview(view: View): View {
    view.superview = this;
    this.subviews.push(view);
    view.setup();
    return view;
  }

  get absolute_frame(): Rect {
    let frame = this.frame.clone;

    let super_view = this.superview;

    while (super_view) {
      frame.origin.add(super_view.frame.origin);
      super_view = super_view.superview;
    }

    return frame;
  }

  commit_animations() {
    if (!this.animations.length) {
      return;
    }

    for (const anim of this.animations) {
      anim.commit(this);
    }

    this.animations = this.animations.filter((a) => !a.isFinished());
  }
}
