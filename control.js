// TODO: HOMEWORK

// -------------------------------------------------
1. //to lowercase function

let text = 1;

function makeLowerCase(text){
   if(typeof text !== 'string'){
      console.log(`This is not a string!`);
   }else{
      return result = text.toLowerCase();
   }
}
// console.log(makeLowerCase(text));
// -------------------------------------------------


// -------------------------------------------------
2. // find factorial
// 
// -------------------------------------------------


// -------------------------------------------------
3. //function that converts  Celsius to Fahrenheit:

const celciusToFahrenheit = function(celcius){
   if(typeof celcius === 'number'){
      return (celcius * 9/5) + 32;
   }else{
      return 'Enter a number!'
   }
}
let toFahrenheightFn = celciusToFahrenheit('d');
console.log(toFahrenheightFn);
// -------------------------------------------------



// EXTRA PRACTISE
1. //Find length of a string.

const findLengthFn = (string) => {
   return string.length
}

let string = 'HELLO WORLD';
let logFn = findLengthFn(string);
// console.log(logFn);

2. // Concat strings

function concatStrings(){
   return result =  str1.concat(str2)
}

let str1 = 'hello ';
let str2 = 'world';

// console.log(concatStrings());


3. // Joined strings
const fruits = ['Apple', 'Banana', 'Orange'];
const joinedString = fruits.join('-');

for(let i = 1; i < fruits.length; i++){
   // console.log(joinedString);
}

4. //Enter a valid number and find greater one

const findLarger = (num1, num2) => {
   if(num1 == '' || num2 == ''){
      return (`Please don't leave empty!`);
   }
   if(typeof num1 !== 'number' || typeof num2 !== 'number'){
      return (`Please enter a number!`)
   }

   if(num1 > num2){
      return num1;
   }else if(num2 > num1) {
      return num2;
   }else{
      return 'Both are equal!'
   }
}
console.log(findLarger(9, 5));

5. // Even or Odd
function evenOrOdd(number) {
   if(number = ''){
      console.log(`Don't leave empty!`);
   }
   if(typeof number !== 'number'){
      console.log(`Enter a number!`)
   }

   if(number % 2 === 0){
      console.log(`Even number.`);
   }
   if(number % 2 === 1){
      console.log(`Odd number`);
   }
}
// console.log(evenOrOdd(2));











// let name;
// function greet(name) {
//   console.log(`Hello, ${name}`);
// }
// greet('Khojiakbar');

// MAX NUMBER



// const maxNumber = (a, b) => {

//    if(a == '' || b == '' ){
//       return 'Enter a valid number!'
//    }
//    if(typeof a !== 'number' || typeof b !== 'number'){
//       return 'Enter a valid number!'
//    }
   
//    if(a > b){
//       return a
//    }else if(b > a){
//       return b
//    }else{
//       return `Both are equal`
//    }
// }
// console.log(maxNumber(4, ''))



// let evenOdd = (number) => {
//    if(number % 2 === 0){
//       return `even`
//    }else{
//       return `odd`
//    }
// }
// console.log(evenOdd(3));

// function addNumber(b, i){
//    let array = [4, 5, 6, 7];
//    array.splice(i, 0, b)
//    let newArray = array;
   
//    console.log(newArray);
// }
// addNumber('d', 3)
// function insertAtIndex(arr, a, b){
//    let newArray = [];
//    for(let i = 0; i < arr.length; i++){
//       if(i == a){
//          newArray.push(b)
//       }
//       newArray.push(arr[i])
//    }
//    return newArray
// }

// let a = 1;
// let b = 9;
// let arr = [4,5,6,7];


// console.log(insertAtIndex(arr, a, b));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.copyWithin(2, 1)
// console.log(fruits);

// let arr = [4,5,6,7]

// let deleteAtElement = (a, arr) => {
//    let newArr = []
//    for(let i = 0; i < arr.length; i++){
//       if(i == a){
//        continue;

//       }
//       newArr.push(arr[i])
//    }
//    return newArr
// }
// let result = deleteAtElement(2, arr)
// console.log(result);

// let numbers = [1,2,3,4]

// for(let i = numbers.length; i > 0; i--){
//    let newArr = []
//    console.log(numbers);
//    newArr.push
// }
// let car = {
//    brand: 'Honda',
//    color: 'red',
//    price: '$200,000'
// }
// console.log(car.brand);