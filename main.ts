import { Point } from "./gm/point";

let message: string = "Hello, World!";
console.log(message);

const p = new Point(10, 5);
console.log(`The square area is: ${p.square()}`);
console.log("Point is:", p);
