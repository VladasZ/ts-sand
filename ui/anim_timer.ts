const SEC = 1000.0;

export class AnimTimer {
  constructor(
    public readonly start: number,
    public readonly span: number,
    public readonly duration: number,
    public readonly stamp: number,
    public readonly infinite: boolean,
  ) {}

  static new(
    start: number,
    end: number,
    duration: number,
    infinite: boolean = false,
  ): AnimTimer {
    const s = start * SEC;
    const e = end * SEC;
    const span = e - s;
    if (span === 0) throw new Error("Zero span");

    return new AnimTimer(s, span, duration * SEC, Date.now(), infinite);
  }

  finished(): boolean {
    if (this.infinite) {
      return false;
    }
    return Date.now() >= this.stamp + this.duration;
  }

  value(): number {
    const now = Date.now();
    const delta = now - this.stamp;
    const passedCount = Math.floor(delta / this.duration);
    const isEven = passedCount % 2 === 0;
    const localDelta = delta - passedCount * this.duration;
    const ratio = localDelta / this.duration;

    const currentSpan = isEven ? this.span * ratio : this.span * (1.0 - ratio);

    return (this.start + currentSpan) / SEC;
  }
}
