// TODO: HOMEWORK-2
console.log(`HOMEWORK-2`);
// _____________________________________________________
// > TEMPLATE LITERALS:

// Exercise 1:  Create a template literal that displays your name, age, and current
// city.

// let name = `Khojiakbar`;
// let age = 26;
// let city = 'Tashkent region';

// function aboutMe(name, age, city){
//    let info = `Hello ${name}, I know you are ${age} years old. And you live in ${city}.`
//    return info;
// }
// console.log(aboutMe(name, age, city));

// Exercise 2: : Write a function that takes a person's name and birthdate as parameters and returns a greeting using a template literal.
// let personName = 'Alisher';
// let personBD = `1998.04.10`;

// let greetUser = (personName, personBD) => {
//    return `Hello ${personName}, You were born in ${personBD}!`
// }

// console.log(greetUser(personName, personBD));
// _____________________________________________________
 1. // STRING LENGTH:
    //Exercise 1: Write a function that takes a string as input and returns the length of the string.

   // let inputText = `This is a short text.`;
   // function textLength(inputText){
   //    return inputText.length
   // }
   // console.log(textLength(inputText));

   //Exercise 2: Given a string, find the character at the middle position

   // function middleCharacter(inputString) {
   //    let inputLength = inputString.length
   //    let middleLetter = inputLength / 2;
   //    return inputString.charAt(middleLetter)

   // }
   // let inputString = 'Hello-World';
   // console.log(middleCharacter(inputString));
// _____________________________________________________
2. //STRING COMPARISON:

//Exercise 1: Write a function that compares two strings and returns  true  if the first string is greater than the second, and  false  otherwise.

// function compareStrings(){
//    str1 = String('b').codePointAt();
//    str2 = String('B').codePointAt();
//    return str1 === str2
// }
// console.log(compareStrings());

//Exercise 2: //Write a function that takes a string and returns the Unicode code point of the first character.

// let returnUnicode = (inputString) => {
//    let firstLetterCode = inputString[0].codePointAt();
//    return firstLetterCode
// }

// inputString = 'defined'
// console.log(returnUnicode(inputString));

// _____________________________________________________

3. //STRING ITERATION:

//Exercise 1: Write a function that takes a string as input and logs each character to the console.

// let logEachChar = (word) => {
//    for(let i = 0; i < word.length; i++){
      // console.log(word[i]);
   // }

   // for of
   // for(el of word){
      // console.log(el);
//    }
// }

// let word = `Hello Javascript`;
// console.log(logEachChar(word));

//Exercise 2: Write a function that takes a string as input and returns an array of the characters in the string.

// let convertStringToArray = function() {
//    let arrayedWord = [...wordArr];
//    return arrayedWord;
// }

// let wordArr = `Hello Javascript`;

// console.log(convertStringToArray());

// _____________________________________________________

4. //Slicing and Substring:

//Exercise 1: Write a function that takes a string and two indices as input, and returns a new string that is the substring between the two indices.

// function returnSlicedString(sliceString, sIndex, eIndex){
//    let slicedString = sliceString.slice(sIndex, eIndex);
//    return slicedString;
// }
// let sIndex = 0;
// let eIndex = 4;
// let sliceString = 'long way';

// console.log(returnSlicedString(sliceString, sIndex, eIndex));

//Exercise 2: Write a function that takes a string and returns the last word of the string.

// function getLastWord(inputString) {

//    let wordsArray = inputString.split(' ');


//    let lastWord = wordsArray[wordsArray.length -1];

//    return lastWord;
// }


// let inputString = "This is a sentence for grabbing last word!";
// let lastWord = getLastWord(inputString);
// console.log("Last Word:", lastWord); 

// _____________________________________________________

5. //Uppercase and Lowercase:

// Exercise 1: Write a function that takes a string as input and returns the string in all uppercase.

// function makeUpperCase() {
//    let upperCasedWord = unorderedText.toUpperCase();
//    return upperCasedWord;
// }

// let unorderedText = `tHis Is a TeXt.`
// console.log(makeUpperCase());

// Exercise 2: Write a function that takes a string as input and returns the string in all lowercase.

// function makeLowerCase() {
//    let lowerCasedWord = unorderedText.toLowerCase();
//    return lowerCasedWord;
// }

// let unorderedText = `tHis Is a TeXt.`
// console.log(makeLowerCase());

// _____________________________________________________

6. //Replacing Text:
// Exercise 1: Write a function that takes a string, an old value, and a new value as input, and returns a new string with the old value replaced by the new value.

// function replaceValue(oldValue, newValue) {
//    let replaced = progLanguage.replace(oldValue , newValue);
//    return replaced;
// }
// let oldValue = 'Java'
// let newValue = 'Python'
// let progLanguage = `${oldValue} language`;
// console.log(replaceValue(oldValue, newValue));


// Exercise 2: Write a function that takes a string and a word as input, and returns a new string with all occurrences of the word removed.

// function replaceAllSameWords() {
//    let replacedWords = sentence.replaceAll('programmer', 'student');
//    return replacedWords;
// }

// let sentence = `I am a programmer and my friend is also a programmer!`;

// console.log(replaceAllSameWords());

// _____________________________________________________

7. //Concatenation:

// Exercise 1: Write a function that takes two strings as input and returns a new string that is the concatenation of the two.

// function concatStrings(conStr1, conStr2) {
//    let concatedString = conStr1.concat(" ", conStr2);
//    return concatedString;
// }

// let conStr1 = 'New'
// let conStr2 = 'String'

// console.log(concatStrings(conStr1, conStr2));



// Exercise 2: Write a function that takes an array of strings as input and returns a single string that is the concatenation of all the strings in the array.

// const concatArrays = function(firstArray, secondArray){
//    let concatinatedArray = firstArray.concat(secondArray);
//    return concatinatedArray;
// }

// let firstArray = ['Apple', "Peach", "Banana"];
// let secondArray = ['Pumpkin', "Onion", "Cabbage"];
// console.log(concatArrays(firstArray, secondArray));

8. // Trimming Whitespace:

// Exercise 1: Write a function that takes a string as input and returns a new string with all leading and trailing whitespace removed.

// function removeWhitespace(){
//    let trimmedWord = trimableWord.trim();
//    return trimmedWord;
// }

// let trimableWord = ` pros and cons `

// console.log(`untrimmed: `, trimableWord);

// console.log(`trimmed:`, removeWhitespace());

// Exercise 2: Write a function that takes a string as input and returns a new string with all leading whitespace removed.

// function removeLeadingWS () {
//    let leadingSpaceRemoved = leadingSpace.trimStart();
//    return leadingSpaceRemoved;
// }
// let leadingSpace = ' Leading Space';
// console.log('Start Untrimmed:', leadingSpace);
// console.log('Start Trimmed:', removeLeadingWS());

9. //Padding:
// Exercise 1: Write a function that takes a string and a target length as input, and returns a new string that is padded with zeros at the beginning to reach the target length.


// function addLengthToStart(targetLength, id) {
//    let lengthenedID = id.padStart(targetLength, '0');
//    return lengthenedID;
// }

// console.log(addLengthToStart(6, '425'));

//Exercise 2: Write a function that takes a string and a target length as input, and returns a new string that is padded with a specified character at the end to reach the target length.

// function addLengthToEnd(targetLength, id) {
//    let lengthenedID = id.padStart(targetLength, '0');
//    return lengthenedID;
// }

// console.log(addLengthToEnd(6, '777'));

10. // Accessing Characters:

// Exercise 1: Write a function that takes a string and an index as input, and returns the character at that index.

// const returnChar = function(string, index){
//    let targetChar = string.at(index);
//    return (`Target character: ${targetChar}`);


// }

// console.log(returnChar('Hello World', 8));

// Exercise 2: Write a function that takes a string and an index as input, and returns the character code of the character at that index.

// const returnCharCode = (string, index) => {
//    let targetChar = string.charAt(index);
//    let charcode = targetChar.codePointAt()
//    return `${targetChar}: ${charcode}`
// }

// console.log(returnCharCode('JAVASCRIPT', 5));

11. // Repetition:

// Exercise 1: Write a function that takes a string and a number as input, and returns a new string that is the original string repeated the specified number of times.

// const repeatString = (string, repeatNum) => {
//    let repeatedString = string.repeat(repeatNum);
//    return repeatedString
// }

// console.log(repeatString(` 
// Hello 
// `, 30));

// Exercise 2: Write a function that takes a character and a number as input, and returns a string that is the character repeated the specified number of times.

// const repeatString = (string, repeatNum) => {
//       let repeatedString = string.repeat(repeatNum);
//       return repeatedString
//    }
   
//    console.log(repeatString(` H `, 30));

