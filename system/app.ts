import r from "raylib";

import { View } from "../ui";
import { UIDrawer } from "./ui_drawer";
import { BLACK, Rect } from "../gm";

export abstract class App {
  private root_view: View = new View(BLACK, Rect.new(0, 0, 0, 0));

  abstract make_root_view(): View;

  run() {
    this.setup_raylib();
    this.root_view = this.make_root_view();
    console.log("Hello");
    console.log(this.root_view);
    this.event_loop();
  }

  private setup_raylib() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 450, "Hello Raylib!");

    const currentMonitor = r.GetCurrentMonitor();
    const displayFps = r.GetMonitorRefreshRate(currentMonitor);

    console.log(`Your monitor is: ${displayFps}Hz`);

    r.SetTargetFPS(displayFps);
  }

  private event_loop() {
    while (!r.WindowShouldClose()) {
      r.BeginDrawing();
      r.ClearBackground(r.RAYWHITE);
      UIDrawer.draw_view(this.root_view);

      r.EndDrawing();
    }
  }

  unload() {
    r.CloseWindow();
  }
}
