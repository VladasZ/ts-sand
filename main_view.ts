import { BLUE, GREEN, Rect, RED, WHITE } from "./gm";
import { Button, View } from "./ui";
import { AnimTimer } from "./ui/anim_timer";
import { UIAnimation } from "./ui/ui_animation";

interface HttpBinHeaders {
  Accept: string;
  "Accept-Encoding": string;
  "Accept-Language": string;
  Host: string;
  "User-Agent": string;
  "X-Amzn-Trace-Id": string;
  // Add others if you need them specifically
}

interface HttpBinResponse {
  args: Record<string, any>;
  data: string;
  files: Record<string, any>;
  form: Record<string, any>;
  headers: HttpBinHeaders;
  origin: string;
  url: string;
}

async function getUsers(): Promise<HttpBinResponse> {
  const response = await fetch("https://httpbin.org/delay/1");

  // Check if the request was successful
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Parse the JSON and cast it to our User array type
  const users: HttpBinResponse = await response.json();
  return users;
}

export class MainView extends View {
  override setup() {
    this.frame = Rect.new(100, 100, 600, 200);
    this.color = BLUE;

    const view2 = this.add_subview(new View(Rect.new(10, 10, 200, 100)));
    view2.color = GREEN;

    const anim2 = new UIAnimation(
      AnimTimer.new(5, 65, 2, true),
      (view, value) => {
        view.frame.y = value;
      },
    );

    view2.animations.push(anim2);

    const view3 = view2.add_subview(new View(Rect.new(20, 48, 50, 50)));
    view3.color = RED;

    const anim3 = new UIAnimation(
      AnimTimer.new(5, 140, 1.5, true),
      (view, value) => {
        view.frame.x = value;
      },
    );

    view3.animations.push(anim3);

    const button = new Button(Rect.new(500, 10, 50, 50));
    button.color = WHITE;
    button.on_tap = () => {
      console.log("Button tapped");

      getUsers().then((data) => {
        console.log(data);
      });

      console.log("Request sent");
    };
    this.add_subview(button);
  }
}
