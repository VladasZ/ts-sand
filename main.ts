import { Rect } from "./gm/rect";
import { View } from "./ui";
import { BLUE, Color, GRAY, GREEN } from "./gm";
import { App } from "./system";
import { MainView } from "./main_view";

class TestApp extends App {
  make_root_view(): View {
    return new MainView(Rect.default);
  }

  override clear_color(): Color {
    return new Color(0.1, 0.1, 0.1, 1);
  }
}

new TestApp().run();
