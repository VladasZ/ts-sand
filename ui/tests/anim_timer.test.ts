import { test, expect } from "vitest";
import { AnimTimer } from "../anim_timer";

const sleep = (seconds: number) =>
  new Promise((resolve) => setTimeout(resolve, seconds * 1000));

test("Animation Tests", async () => {
  const anim = AnimTimer.new(0.0, 1.0, 0.5);

  expect(anim.value()).toBeGreaterThanOrEqual(0.0);
  expect(anim.value()).toBeLessThanOrEqual(0.002);
  expect(anim.finished()).toBe(false);

  await sleep(0.25);

  expect(anim.finished()).toBe(false);
  expect(anim.value()).toBeGreaterThanOrEqual(0.48);
  expect(anim.value()).toBeLessThanOrEqual(0.52);

  await sleep(0.1);

  expect(anim.finished()).toBe(false);
  expect(anim.value()).toBeGreaterThanOrEqual(0.7);
  expect(anim.value()).toBeLessThanOrEqual(0.74);

  await sleep(0.15);

  expect(anim.finished()).toBe(true);
  expect(anim.value()).toBeGreaterThanOrEqual(0.92);
  expect(anim.value()).toBeLessThanOrEqual(1.04);

  await sleep(0.25);

  expect(anim.finished()).toBe(true);
  expect(anim.value()).toBeGreaterThanOrEqual(0.48);
  expect(anim.value()).toBeLessThanOrEqual(0.52);
});
