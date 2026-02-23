import r from "raylib";

import { Point } from "./gm/point";
import { Rect } from "./gm/rect";
import { View } from "./ui";
import { GREEN } from "./gm";
import { UIDrawer } from "./system";

r.SetTraceLogLevel(r.LOG_NONE);
r.InitWindow(800, 450, "raylib [core] example - basic window");

const currentMonitor = r.GetCurrentMonitor();
const displayFps = r.GetMonitorRefreshRate(currentMonitor);

console.log(`Your monitor is: ${displayFps}Hz`);

r.SetTargetFPS(displayFps);

const view = new View(GREEN, Rect.new(100, 100, 100, 100));

while (!r.WindowShouldClose()) {
  r.BeginDrawing();
  r.ClearBackground(r.RAYWHITE);
  r.DrawText(
    "Congrats! You created your first window!",
    190,
    200,
    20,
    r.LIGHTGRAY,
  );
  UIDrawer.draw_view(view);

  r.EndDrawing();
}
r.CloseWindow();
