let outputColor = "color:green; font-size:15px;"
console.log (`Question 1 :
Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
       - Do not use numbers to reference the last element, find it programmatically.
       - ages[7] - ages[0] is not allowed!
    b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    c. Use a loop to iterate through the array and calculate the average age.
    `)

// Creating the array 'ages'.
let ages = [3,9,23,64,2,8,28,93];
// Creating new variable named 'result' that takes the value of the first element
// and subtracts it from the value of the last element.
let result = ages[ages.length -1] - ages[0];
//pushing a new age to the array to make sure it works will arrays of all sizes
ages.push(43);
//logging the result to the console
console.log(result);

// Loop findng the average age of the array

// Finding the sum first
let sum = 0; 
for (let i = 0 ; i < ages.length ; i++) {
    sum += ages[i];
}

//Using the var 'sum' we divide that by the number of elements in the array
let average = sum / ages.length;

//logging the result to the console
console.log(average);

//-------------------------------------------------------------------------

console.log (`Question 2 :
Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a. Use a loop to iterate through the array and calculate the average number of letters per name.
    b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
`)

// Creating the array 'names'
let names = ['Sam','Tommy','Tim','Sally','Buck','Bob'];

// Creating loop to calculate the total number of letters.
let numOfLetters = 0;
for (let i = 0 ; i < names.length; i++) {
    // will iterate through i the number of names in the array (6). So 6 times
    // first iteration 0 + the lenght of element at place 0 in the array (Sam - 6) = 6
    // second iteration, now numOfLetters = 6 and i = 1 which is still less than 6, so it will run through. 6 + 5(Tommy) = 11. Repeats 6 times.
    numOfLetters += names[i].length;
}

//Creating a new var that is the numOfLetters divided by the number of elements in the array. 
let avgNumOfLetters = numOfLetters / names.length;

//logging the result to the console
console.log (avgNumOfLetters);

// Creating a new var and loop that concatenates all the names of the arrray with spaces in between

// This creates a blank space so to speak for the names to returned to and concatenated toghether. 
let concatenatedNames = '';
// the for loop runs through the number of times based off of number of elements in array (6). It will add the concatenatedNames to the name
//at the element in the array designated by 'i' and add a space to the end. 
for (let i = 0 ; i < names.length; i++) {
    concatenatedNames += names[i] + ' ';
}

//logging the result to the console
console.log(concatenatedNames);

//-------------------------------------------------------------------------

console.log(`Question 3: 
How do you access the last element of any array?`)
console.log("%cAnswer: let lastElementOfAnyArray = array[array.length - 1];", outputColor);

//-------------------------------------------------------------------------


console.log(`Question 4: 
How do you access the first element of any array?`)
console.log("%cAnswer: let lastElementOfAnyArray = array[0];", outputColor);

//-------------------------------------------------------------------------

console.log (`Question 5 :
Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length 
of each name to the nameLengths array.
`)

// Creating the new array, with no elements so they can be pushed in
let namesLengths = [];

// This is the same loop that I used in question 2, to calculate the total number of letters, but without the seond part of adding them together.
// The second part of the for loop pushes those values to the blank array.
for (let i = 0 ; i < names.length ; i++) {
    namesLengths.push(names[i].length);
}

//logging the result to the console
console.log(namesLengths);

//-------------------------------------------------------------------------

console.log(`Question 6: 
Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`)

// Creating a new var for the sum 
let sumOfNamesLengths = 0 ;

// a for loop that iterates through th namesLengths array and adds the values of the elements together
for (let i = 0 ; i < namesLengths.length ; i ++) {
    sumOfNamesLengths += namesLengths[i];
}

//logging the result to the console
console.log(sumOfNamesLengths);

//-------------------------------------------------------------------------

console.log(`Question 7: 
Write a function that takes two parameters, word and n, as arguments and 
returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
`)

// creating the function with two parameters. It creates a var called 'result' that is a blank string. 
// The for loop adds the 'word' parameter as many times as the 'n' value determines. Then it returns that 'result'.
function repeatWord(word, n) {
    let result = '';
    for ( let i = 0 ; i < n ; i++ ) {
        result += word;
    }
return result;
}

//logging the result to the console
console.log(repeatWord('Hello',3));

//-------------------------------------------------------------------------

console.log(`Question 8: 
Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space.
`)

// Creating a funciont called fullName that takes two parameters. 
//It creates a var called 'result' that is equal to the first parameter, plus a string that is a space, 
//plus the second paramenter. It then returns that 'result'.
function fullName(firstName, lastName) {
    let result = firstName + ' ' + lastName;
    return result;
}

//logging the result to the console
console.log(fullName('Adrian','Cain'));

//-------------------------------------------------------------------------

console.log(`Question 9: 
Write a function that takes an array of numbers and 
returns true if the sum of all the numbers in the array is greater than 100.
`)

// Creating a function that takes an array as input. It creates a var named 'sum' that stores the sum of all the values in the array. 
//It then returns true or false based on the value in sum being greater or less than 100.
function sumIsGreaterThanOneHundred(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += namesLengths[i];
    }
    return sum > 100;
}

//logging the result to the console
console.log(sumIsGreaterThanOneHundred(namesLengths));

//-------------------------------------------------------------------------

console.log(`Question 10: 
Write a function that takes an array of numbers and returns the average of all the elements in the array.
`)

// Creating a function that takes in an array as a parameter, adds the values all together, stores that in a var named 'sum'.
// It then creates a new var named 'average' that is equal to the 'sum' variable divided by the number of elements in the array. 
function averageOfAnArray(num) {
    let sum = 0; 
        for (let i = 0 ; i < num.length ; i++) {
            sum += num[i];}
    let average = sum / ages.length;        
    return average;
}

//logging the result to the console
console.log(averageOfAnArray(namesLengths));

//-------------------------------------------------------------------------

console.log(`Question 11: 
Write a function that takes two arrays of numbers and returns true if the average of the elements
in the first array is greater than the average of the elements in the second array.
`)

// Creating the function that takes two parameters. It iterates throught the first array, storing the sum in sum1, then iterates through the second array and stores that sum 
// in sum2. It then creates two vars, that store the average of both arrays. The return then takes the two averages and returns true or false if parameter one's average is greater
// than parameter two's. 
function avgOfTwoArrays(arry1, arry2) {
    let sum1 = 0;
    for (let i = 0 ; i < arry1.length ; i++) {
        sum1 += arry1[i];}
    let sum2 = 0;
    for (let i = 0 ; i < arry2.length ; i++) {
        sum2 += arry2[i];}
    let average1 = sum1 / arry1.length;
    let average2 = sum2 / arry2.length;
    return average1 > average2;    
}

//logging the result to the console
console.log(avgOfTwoArrays(ages,namesLengths));

//-------------------------------------------------------------------------

console.log(`Question 12: 
Write a function called willBuyDrink that takes a boolean isHotOutside, 
and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
`)

// Creating a function willBuyDrink that has two parameters. It then runs a loop, that returns true 
// if parameter isHotOutside is set to true and the value in moneyInPocket is greater than 10.50. If neither meet that criteria, it returns false. 
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

//logging the result to the console
console.log(willBuyDrink(true, 20.00));