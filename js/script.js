//This declares the variable myVar
var myVar;
myVar = 0;

var myName = "David" ;
//doubled quotes string cannot contain double quotes within unless unless they are using a \
//same applies for single quoted string
var mySentence = "what's up";
var thing = 'and he said "what\'s up" to me';
//strings cannot break lines by default
var myLongString = "This actually isn't too long." ;
var myBoolean = false;

var numA = 14;
var numB = 27;

var sumOfAandB = numA + numB;

//addition in js is done with the + symbol
numA = 32;
var numAminusNumB = numA - numB;

var numC = 3 * 3;

var numD = 4/2;

var myExponent = 2 ** 4;

//modulus done with a % returning the remainder after divsion

var myModulus = 5 % 2;

//it will return as 1 becuse 2 goes twice with 1 left over

var myFullName = myName + " Tapia";
//spaces must be put in manually

// This creates the me variable and assigns it to be an object
var me = {
  name: "kurt Petrek",
  age: 29,
  isAwesome: true,
  head: {
  eyes: 2,
  hairColor: "brown",
  brain: true }

};

console.log(me.age);

//this sets the age property to the value on the me object to 30
me.age = 30;

console.log(me.age);

//Arrays are key value pairs where the key is a number, Array
//created using [] each element within the array is seperated by a ,

var myArr = [55, "Tiger", true, me];

//arrays in javascript start with a 0 index, to access elements within an array use []
//with the index number, myArray[0] would be 55, myArray[1] would be tiger

me.hobbies = ["code", "music", "food", "games"];

console.log(me.hobbies[0]);

var something;
console.log(something);

function sayHelloTo (name) {
  var message = "welcome to javascript city" + name + "!" ;
  console.log(message);
}

// sayHelloTo("Richard Simmons");


//This is a function expression that creates a function called sumNums
var sumNums = function(firstNum,secondNum) {
var sum = firstNum + secondNum;
//This will return the value of the sum variable to where the
//function is called, once a return statement is triggered no
//further code is executed
return sum;
};

sumNums(2,2);

console.log(sumNums (2,2));
