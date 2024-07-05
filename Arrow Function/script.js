// <<<<<<<<<<< Arrow Function >>>>>>>>>

// 1. Adding two Numbers...........
const add =(a,b) => a+b;
console.log(add(5,3));
// output: 8

// 2.Squaring a Number.............
const square = x => x*x;
console.log(square(4));
// output: 16

// 3.Converting a String to Uppercase........
const toUpperCase = str => str.toUpperCase();
console.log(toUpperCase('hello'));
// output: HELLO

// 4.Doubling Each Element in an Array....
const doubleArray = arr => arr.map (x => x*2);
console.log(doubleArray([1,2,3,4]));
// output: [2, 4, 6, 8]

// 5.Checking if a number is even.........
const isEven = num => num % 2 === 0;
console.log(isEven(0));
console.log(isEven(2));
console.log(isEven(4));
console.log(isEven(6));
console.log(isEven(8));
console.log(isEven(10));
console.log(isEven(12));
console.log(isEven(52));
// output: true 
console.log(isEven());
console.log(isEven(1));
console.log(isEven(3));
console.log(isEven(5));
console.log(isEven(7));
console.log(isEven(9));
console.log(isEven(11));
console.log(isEven(111));
// output: false

// 6.Filtering positive number from an Array......
const psNumber = arr => arr.filter(num => num > 0 );
console.log(psNumber([-3, -1, 2, 4, -5]));
//output: [2, 4]

// 7.Function with no parameters Printing a Message......
const greet = () => console.log('Hello, World!');
greet(); //output: Hello, World!

// 8.  Getting ASCII Value of a Character.....
const charToAscii = char => char.charCodeAt(0);

console.log(charToAscii('A')); // output: 65
console.log(charToAscii('a')); // output: 97
console.log(charToAscii('B')); // output: 66
console.log(charToAscii('b')); // output: 98
console.log(charToAscii('C')); // output: 67
console.log(charToAscii('c')); // output: 99
console.log(charToAscii('D')); // output: 68
console.log(charToAscii('d')); // output: 100
console.log(charToAscii('E')); // output: 69
console.log(charToAscii('e')); // output: 101
console.log(charToAscii('M')); // output: 77
console.log(charToAscii('Z')); // output: 90
console.log(charToAscii('z')); // output: 122

// 9. Checking if a Character is Uppercase.......
let isUpper = char => char.toUpperCase();
console.log(isUpper('A')); // output: A
console.log(isUpper('a')); // output: A

// 10. Concatenating Two Strings.......
let concatenate = (str1, str2) => `${str1} ${str2}`;  
console.log(concatenate('My name is', 'Safiulla'));
// output: My name is Safiulla

//11. Doubling Each Character in a String......
const doubleCharacters = str => str.split('').map(char => char + char).join('');
console.log(doubleCharacters('hello')); // Output: hheelllloo

