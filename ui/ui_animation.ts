import { AnimTimer } from "./anim_timer";
import { View } from "./view";

export type AnimationAction = (view: View, value: number) => void;

export class UIAnimation {
  public onFinish?: () => void;

  constructor(
    private animation: AnimTimer,
    private action: AnimationAction,
  ) {}

  public static new(
    animation: AnimTimer,
    action: AnimationAction,
  ): UIAnimation {
    return new UIAnimation(animation, action);
  }

  public isFinished(): boolean {
    return this.animation.finished();
  }

  public commit(view: View): void {
    this.action(view, this.animation.value());
  }
}
