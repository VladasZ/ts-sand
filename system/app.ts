import r from "raylib";

import { Input, View } from "../ui";
import { UIDrawer } from "./ui_drawer";
import { BLACK, Color, Rect } from "../gm";
import console from "console";

export abstract class App {
  private root_view: View = new View(Rect.new(0, 0, 0, 0));

  abstract make_root_view(): View;

  clear_color(): Color {
    return BLACK;
  }

  run() {
    this.setup_raylib();
    this.root_view = this.make_root_view();
    this.root_view.setup();
    console.log(this.root_view);
    this.event_loop();
  }

  private setup_raylib() {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(800, 450, "Hello TypeScript!");

    const currentMonitor = r.GetCurrentMonitor();
    const displayFps = r.GetMonitorRefreshRate(currentMonitor);

    console.log(`Your monitor is: ${displayFps}Hz`);

    r.SetTargetFPS(displayFps);
  }

  private event_loop() {
    while (!r.WindowShouldClose()) {
      const touches = Input.get_touches();

      r.BeginDrawing();
      r.ClearBackground(this.clear_color().raylib);
      UIDrawer.draw_view(this.root_view);

      r.EndDrawing();
    }
  }

  unload() {
    r.CloseWindow();
  }
}
