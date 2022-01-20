function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', minutes);

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

var greeting = getGreeting('World');
console.log('getGreeting exercise:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var sumProduct = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', sumProduct);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var productDivision = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', productDivision);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtracting = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtracting);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('cube exercise:', cubed);
