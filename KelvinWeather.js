// Constent with Kelvin assgined to value of 293
const kelvin = 283;
// Constent with celsius assgined to Kelvin -273
const celsius = kelvin - 273;
//  new var equal to Celsius and mutiply by (9/2) + 32
let newton = celsius * (33 / 100)
let fahrenheit = celsius * (9 / 5) + 32;
// so math.floor gives the lowest num assigned with

newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit `);

console.log(`The temperature is ${newton} degrees Newton.`)