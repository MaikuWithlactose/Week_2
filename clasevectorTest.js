import { Vector } from "./Clasevector";

const vector = new Vector(5,10);
const vector2 = new Vector(5,10);

vector.print();
console.log(vector.add(vector2))
console.log(vector.mult(vector2))
console.log(vector.multNumber(vector2))
console.log(vector.subs(vector2))
