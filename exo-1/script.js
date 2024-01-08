// you can write js here
console.log('hello from file');

let kelvins = prompt("Quelle est la température en Kelvins aujourd'hui ?");
const celsius = kelvins - 273;
const fahrenheits = Math.floor(celsius * (9/5) + 32);

console.log(kelvins+"°K")
console.log(celsius+"°C")
console.log(fahrenheits+"°F")