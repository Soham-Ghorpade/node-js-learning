const {buffer} = require('buffer');

const buff = Buffer.from('Hello, World!', 'utf-8');

console.log(buff);
console.log(buff.toString());

const buffTwo = Buffer.allocUnsafe(5);
console.log(buffTwo);

const buffThree = Buffer.from("Shivam");
console.log(buffThree.toString());
buffThree[0] = 833
console.log(buffThree.toString());