import { Color, Rect, WHITE } from "../gm";

export class View {
  color: Color;
  frame: Rect;

  superview?: View;
  subviews: View[];

  constructor(rect: Rect) {
    this.color = WHITE;
    this.frame = rect;
    this.subviews = [];
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
}
