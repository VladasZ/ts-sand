import { expect, test } from "vitest";
import { Rect } from "../rect";

test("Test Rect", () => {
  const rect = Rect.new(1, 2, 3, 4);

  expect(rect.x).toBe(1);
  expect(rect.y).toBe(2);
  expect(rect.width).toBe(3);
  expect(rect.height).toBe(4);
});
