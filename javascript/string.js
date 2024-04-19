
// const anvar = {
//    name:'Anvar', age:20
// }

// const Sarvar = {
//    name:'Sarvar', age:30
// }
// console.log(Sarvar.age > anvar.age);

// let name = "Nodirbek";

// console.log(name[name.length-1]);
// console.log('Nodirbek'.codePointAt());

// console.log('Z'.codePointAt());
// console.log(String.fromCharCode(90));

// FOR LOOP
// let text = 'I am a string!'

// for(let i = 0; i < text.length; i++){
//    console.log(` ${text[i]}`);
// }

// for (i in text) {
    // console.log(text[i]);
// }

// for (el of text){
    // console.log(el);
// }

// ~~~ SPREAD
// let name1 = 'Nodirbek';
// let name2 = 'Sarvar';
// let name3 = 'Doniyor';


// let arr = [...name3, ...name1, ...name2]
// console.log(arr.splice(2,4));

// SLICING STRING

// let text = `Hey guest! What would you likke to drink?`
// let result = text.slice(4, 9);

// console.log(result);

// UPPER LOWER CASES

// let message = 'tHis a TexT.'
// for(let i = 0; i < message.length; i++){

// }

// let lowerText = message.toLowerCase();
// let upperText = message.toUpperCase();

// console.log(lowerText);
// console.log(upperText);


// REPLACE 

let text = 'Are you Jack?'
let updated = text.replace('Jack', 'Nodir')
// console.log(updated);

let text2 = 'Are you Jack, Jack?'
let updated2 = text2.replaceAll('Jack', '');
// console.log(updated2);

// CONCATINATION

let fName = 'Alice';
let lName = 'Smith';
let frName = 'Aloe'

// let fullName = fName.concat(' ', lName, ' ', frName)
// console.log(fullName);


// const messyString = "  Hello World  ";
// console.log(messyString);
// let trimmedString = messyString.trim()
// let trimStart = messyString.trimStart()
// let trimEnd = messyString.trimEnd()
// console.log(trimEnd);

// PADDING
// const id = '123';
// console.log(id);

// const paddedID = id.padStart(6, '0');
// const paddedEndID = id.padEnd(6, '0');
// console.log(paddedID);
// console.log(paddedEndID);

// AT
let word = 'hello';
let firstLetter = word.charAt(0).toUpperCase()
let capitalWord = firstLetter.concat(word[1])
// console.log(capitalWord);

// REPEAT
// const dash = '-Salom-';
// const line = dash.repeat(20)
// console.log(line);

let dates = '2020-12-02';
let datesArray = dates.split('-')
// console.log(datesArray);

// let str = "Dasturlash";
// let strIndex;
// let findLetter = (strIndex) => {
//    strIndex = (str.charAt(strIndex));
//    return strIndex
// }
// let indexFn = findLetter(0)
// console.log(indexFn);


let str = "Dasturlash";



function charCode(letter){
   let charCodeId = str.charCodeAt(letter);
   return charCodeId;
}
// console.log(charCode('p'));


let strA = 'Programming';
let strB = 'Programming';

function checkStringEquality(strA, strB) {
   // Check length
   if(strA.length !== strB.length){
      return 'Length are not equal.'
   }

   // Check value
   for(let i = 0; i < strA.length; i++){

      if(strA.charCodeAt(i) !== strB.charCodeAt(i)){
         return 'Values are not equal'
      }
   }

   return 'Length and values are equa'
   

}
console.log(checkStringEquality(strA, strB));