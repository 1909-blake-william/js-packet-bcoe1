// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
function fib(n) {
    if (n <= 0) {
        console.log('Enter positive number')
        return null;
    } else if (n == 1) {
        return 0;
    } else if (n == 2) {
        return 1;
    }
    let num1 = 0;
    let num2 = 1;
    let newNum;

    for (let i = 3; i <= n; i++) {
        newNum = num1 + num2;
        num1 = num2;
        num2 = newNum;
    }

    return num2;
}


// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(numArray) {
    //assume input is only numbers
    for (let i = 0; i < numArray.length - 1; i++) {
        let check = true;
        for (let j = 0; j < numArray.length - 1 - i; j++) {
            if (numArray[j] > numArray[j + 1]) {
                let x = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = x;
                check = false;
            }
        }
        if (check) {
            return numArray;
        }
    }
    return numArray;
}
//bubbleSort([4,3,6,1,2,9])


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.

function reverseStr(someStr) {
    let revString = '';
    for (let i = someStr.length - 1; i >= 0; i--) {
        revString = revString.concat(someStr.charAt(i));
    }
    console.log(revString);
    return revString;
}

// reverseStr('hi blake');




// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(someNum) {
    if (someNum == 1) {
        return 1;
    } else {
        return someNum * factorial(someNum - 1);
    }
};

//console.log(factorial(5))


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, 
// use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (offset + length > someStr.length) {
        let overIndex = offset + length - someStr.length;
        alert(`String needs to be ${overIndex} longer with current offset and length.`)
    } else if (typeof (someStr) !== 'string') {
        alert('someStr needs to be a string.')
    } else if (typeof (length) !== 'number' || !Number.isInteger(length) || length < 1) {
        alert('length needs to be a positive integer.')
    } else if (typeof (offset) !== 'number' || !Number.isInteger(offset) || offset < 0) {
        alert('offset needs to be a non-negative integer.')
    } else {
        let x = someStr.split('');
        let newString = '';
        for (let i = offset; i <= length + offset-1; i++) {
            newString += x[i]
        }
        return newString;

    }
};

//console.log(substring('String1', 6, 1))


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

