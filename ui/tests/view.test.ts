import { expect, test } from "vitest";
import { Point, Rect } from "../../gm";
import { View } from "../view";

test("Test View", () => {
  const view = new View(Rect.new(0, 0, 100, 100));

  const view2 = view.add_subview(new View(Rect.new(10, 10, 10, 10)));
  const view3 = view2.add_subview(new View(Rect.new(10, 10, 10, 10)));

  expect(view3.absolute_frame.origin).toStrictEqual(new Point(20, 20));
});
