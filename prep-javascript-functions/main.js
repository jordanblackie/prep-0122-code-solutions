function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

//

function addTwoNumbersv2(num1, num2) {
  return num1 + num2;
}

var sum2 = addTwoNumbersv2(5, 5);
console.log('sum', sum2);

//

function convertHoursToMinutes(hours) {
  return (hours * 60);
}

// var hours = 2
console.log(convertHoursToMinutes(2));

//

function getGreeting(name) {
  console.log('Hello ' + name);
}
getGreeting('Bob');

//

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var result = addAndMultiplyBy5(10, 5);
console.log('result', result);

//

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var result2 = multiplyAndDivideBy5(35, 10);
console.log('result', result2);

//

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}
var result3 = subtractTwoNumbers(22, 7);
console.log('result', result3);

//

function getCircleCircumference(radius) {
  return (2 * radius * 3.14159);
}
var result4 = getCircleCircumference(5);
console.log('result', result4);

//

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}

var result5 = getFullName('Bob', 'Bobson');
console.log(result5);

// other versions I tried:
// var fullName = getFullName('Bob', 'Bobson');
// console.log(getFullName('Bob', 'Bobson'));

//

function cube(number) {
  return (number * number * number);
}
var result6 = cube(5);
console.log(result6);
