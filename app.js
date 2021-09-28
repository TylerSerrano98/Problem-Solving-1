'use strict'
//code below
//problem 1: Reverse a string

//created new variable of string="hello"
// use split method to split the string 'hello' into seperate substrings also converting it into an array.
// use reverse method to reverse the substrings in the array.
// use join method to combine the reversed substrings back to gether to form full string 'elloh'.
// console logged the variable holding my formula executing the reversal
let str = 'hello'

let reversedString = str.split('').reverse().join('');

console.log(reversedString);

//problem 2: Capitalize letter

let str2 = 'utah jazz'
//split the string into an array of strings
let arr = str2.split(" ");
//loop through array and capitalize first letter.
for(let i = 0; i < arr.length; i++) {
  arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }  
// join the elements in the array back into an individual string.
  let complete = arr.join(" ");
  console.log(complete);

//problem 3: Compress a string of characters

function compressString(str) {
  //create function to iterate over string, also comparing current and next character
  if(str.length === 0) {
    console.log('When call function, string will compress!');
    return;
  }
  //if characters are not the same 
  let output = '';
  let count = 0;
  for(let i = 0; i < str.length; i++) {
  //increment the count by 1
    count++;
    if(str[i] !== str[i+1]) {
    output += str[i] + count;
    count = 0;
    }
  }
  console.log(output);
  //then concat the string.
}
compressString('aaabbbccc');

//problem 4: Palindrome
//create prompt for user to input their string.
let palindrome = prompt('please enter a Palindrome');
let len = palindrome.length;
let msg = 'It is a Palindrome';
//iterate through the string to see if characters on back half match the front half.
for(let i = 0; i < len/2; i++) {
  if(palindrome[i] !== palindrome[len - 1 - i]) {
    msg = 'It is not a Palindrome'
  }
}
console.log(`${palindrome}: ${msg}`);
//console log variables using string concatanation






