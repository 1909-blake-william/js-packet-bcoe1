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
        for (let i = offset; i <= length + offset - 1; i++) {
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

function isEven(someNum) {
    //assume inputs are numbers and not NaN or infinity
    numString = someNum.toString();
    lastNum = Number(numString.charAt(numString.length - 1));
    if ('24680'.includes(lastNum)) {
        return true;
    } else {
        return false;
    }

}
//console.log(isEven(11112.23))


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    someStr = someStr.toLowerCase()
    for (let i = 0; i < (someStr.length / 2) + 1; i++) {
        if (someStr.charAt(i) === someStr.charAt(someStr.length - i)) {
            return false;
        }
    }
    return true;
};

//console.log(isPalindrome('racecar'))

// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape.
// Assume this String contains just one character.
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

function printShape(shape, height, character) {
    //assume height is atleast 1
    switch (shape) {
        case 'Square': {
            let row = '';
            for (let i = 0; i < height; i++) {
                row += character;
            }
            for (let i = 0; i < height; i++) {
                console.log(row)
                
            }
            break;
        }
        case 'Triangle': {
            let row = '';
            for (let i = 0; i < height; i++) {
                row += character;
                console.log(row)
            }
            break;
        }
        case 'Diamond': {
            
            if(height === 1){  
                console.log(character);
            } else {
                let offsetLength = (height-1)/2;
                let offset = '';
                for(let i = 1; i <= offsetLength; i++){
                    offset += ' '
                }
                let row = character;
                
                console.log(offset + row);
                for(let i = 2; i < (height/2)+1.5; i++) { 
                    //add 1.5 so middle row prints
                    row += character + character;
                    offset = offset.substr(0, offset.length-1)
                    console.log(offset + row)
                }
                for(let i = (height/2)+1.5; i < height+1; i++) { 
                    row = row.substr(0,row.length-2)
                    offset += ' '
                    console.log(offset + row)
                }
            }
            break;
        }
        default:
            console.log('only Triangle, Square, and Diamond are valid shapes.')
            break;
    }
};

//printShape('Diamond', 5, '*')


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.


function traverseObject(someObj) {
    let thisArr = Object.entries(someObj);
    for (let i = 0; i < thisArr.length; i++) {
        console.log(`${thisArr[i][0]} is ${thisArr[i][1]}`)
    }
};


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteElement(someArr) {
    console.log(someArr.length)
    delete someArr[2];
    console.log(someArr.length)
};

//deleteElement('brian')



// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceElement(someArr) {
    //assume inputs are of type array
    console.log(someArr.length)
    someArr.splice(2, 1)
    console.log(someArr.length)
};

//spliceElement([1,2,3,4,5])


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);

function Person(name, age) {
    this.name = name;
    this.age = age;
};

//let john = new Person("John", 30);
//console.log(john)


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

function getPerson(name, age) {
    let person = {
        name: name,
        age: age
    }
    return person;
};
//let john = getPerson("John", 30);
// console.log(john)

//traverseObject(john)