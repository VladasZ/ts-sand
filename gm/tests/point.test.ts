import { expect, test } from "vitest";
import { Point } from "../point";

test("Test Point", () => {
  let point = Point.default;
  
  expect(point.x).toBe(0);
  expect(point.y).toBe(0);
  
  point.x = 3;
  point.y = 2;

  expect(point.x).toBe(3);
  expect(point.y).toBe(2);
  
  let ref_point = point;
  
  let point2 = point.clone;

  point2.add(new Point(5, 10));
  ref_point.add(new Point(5, 10));

  expect(point2.x).toBe(8);
  expect(point2.y).toBe(12);
  
  expect(point.x).toBe(8);
  expect(point.y).toBe(12);
});
