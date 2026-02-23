import { Rect } from "./gm/rect";
import { View } from "./ui";
import { GREEN } from "./gm";
import { App } from "./system";

class TestApp extends App {
  make_root_view(): View {
    return new View(GREEN, Rect.new(100, 100, 100, 100));
  }
}

new TestApp().run();
