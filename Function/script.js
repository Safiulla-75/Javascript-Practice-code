// 1. Define a function to calculate the square of a number
function square(num){
  return num * num;
};
let result = square(9);
console.log(result);
// output: 81

//12. Function with Multiple Parameters:
// Define a function to add two numbers
function add(a,b){
  return a+b;
}
let sum = add (13,8);
console.log(sum);
// output: 21

// 3. Function with No Parameters:
function greet() {
  console.log("Hello Editer");
}
// Call the function
greet();
// Output: "Hello Editer"

// 4. Define a function using a function expression
let multiply = function(x, y) {
  return x * y;
};

// Call the function
console.log(multiply(4, 5)); // Output: 20

// // 5. Respond to Greetings and Farewells:
function greets(message) {
  if (message.toLowerCase() === 'hello'){
    return 'Hi!';
  } else if (message.toLowerCase() === 'how are you'){
    return 'I am good, thank you!';
  } else if (message.toLowerCase() === 'bye'){
    return 'Goodbye!';
  } else {
    return 'sorry, I didn\'t understand that.';
  }
}
// Function Calls:
console.log(greets('Hello')); // output: Hi!
console.log(greets('How are you')); // Output:I am good, thank you!
console.log(greets('bye')); // Goodbye!
console.log(greets('goodnight')); // Output: sorry, I didn\'t understand that.

// 6.Convert Units:
function isUnits(msg) {
  if (msg.toLowerCase().startsWith('convert ')){
    const parts = msg.split(' ');
    const value = parseFloat(parts[1]);
    const unit = parts[2];

    if (unit === 'miles'){
      return `${value} miles is ${value * 1.60934} Kilometers.`;
    } else if (unit === 'kilograms'){
      return `${value} Kilogram is ${value * 2.20462} Pounds.`
    } else {
     return 'Sorry, I can only convert miles to kilometers or kilograms to pounds.';
    }
  } else {
    return 'Please specify what you want to convert.';
  }
};

// Function Calls:
console.log (isUnits('convert 5 miles'));
 // Output: 5 miles is 8.0467 kilometers.
console.log (isUnits('convert 3 kilograms')); // Output: 3 Kilogram is 6.613859999999999 Pounds.
console.log (isUnits('convert 4 litters')); // Output: Sorry, I can only convert miles to kilometers or kilograms to pounds.
console.log (isUnits('5 miles')); //Output:Please specify what you want to convert.