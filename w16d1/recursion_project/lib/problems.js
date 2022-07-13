// Write a function, lucasNumber(n), that takes in a number.
// The function should return the n-th number of the Lucas Sequence.
// The 0-th number of the Lucas Sequence is 2.
// The 1-st number of the Lucas Sequence is 1
// To generate the next number of the sequence, we add up the previous two numbers.
//
// For example, the sequence begins: 2, 1, 3, 4, 7, 11, ...
//
// Solve this recursively!
//
// Examples:
//
// lucasNumber(0)   // => 2
// lucasNumber(1)   // => 1
// lucasNumber(2)   // => 3
// lucasNumber(3)   // => 4
// lucasNumber(5)   // => 11
// lucasNumber(9)   // => 76
function lucasNumber(n) {
    if(n === 0) return 2;
    if(n === 1) return 1;

    return lucasNumber(n - 1) + lucasNumber(n - 2);
}

/** Pseudocode
 * Base cases are th first 2 numbers of the sequence
 * Recursive step for the nth value of the sequence will then just be the a recursive call to the prev two values using (n-1) and (n-2)
 */


// Write a function, sumArray(array), that takes in an array of numbers.
// The function should return the total sum of the elements.
// 
// Solve this recursively!
//
// Examples:
//
// sumArray([])             // => 0
// sumArray([5])            // => 5
// sumArray([5, 2])         // => 7
// sumArray([4, 10, -1, 2]) // => 15
function sumArray(array) {
    if(array.length === 0) return 0;

    return array[0] + sumArray(array.slice(1));
}

/** Pseudocode
 * Base case is when the array length is 0
 * Recursive step is to add the first element and call sumArray on the rest of the array
 */

// Write a function, reverseString(str), that takes in a string.
// The function should return the string with it's characters in reverse order.
//
// Solve this recursively!
//
// Examples:
// 
// reverseString("")            // => ""
// reverseString("c")           // => "c"
// reverseString("internet")    // => "tenretni"
// reverseString("friends")     // => "sdneirf"
function reverseString(str) {
    if(!str) return "";

    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

/** Pseudocode
 * Base case is when the string is empty
 * Recursive step is to add the last char to a reversed string and call reverseString on the rest of the string
 */

// Write a function, pow(base, exponent), that takes in two numbers.
// The function should calculate the base raised to the exponent power.
//
// Note: 
// A negative exponent can be calculate by taking the reciprocal of the positive exponent.
// That is, pow(2, -5) is equal to 1 / pow(2, 5)
// 
// Solve this recursively!
//
// Examples:
//
// pow(2, 0)    // => 1
// pow(2, 1)    // => 2
// pow(2, 5)    // => 32
// pow(3, 4)    // => 81
// pow(2, -5)   // => 0.03125
function pow(base, exponent) {
    if(base === 1) return base;
    if(base === 0 || exponent === 0) return 1;

    if(exponent > 0) {
        return base * pow(base, exponent - 1);
    } else {
        return 1/base * pow(base, exponent + 1);
    }
}

/** Pseudocode
 * Base case is when base is either 1 or 0, and when exponent is 0
 * Recursive step depends on the sign of the exponent, but you will multiply the base with the next step of pow called with a modified exponent
 */

// A 1-dimensional array is also known as a flattened array.
// Write a method, flatten(data), that accepts a single argument. The
// method should take in an array of any dimension and return the flattened
// version of that array. Solve this recursively.
//   
// Hint:
//  - if the argument is not an array, then we have reached the base case
//  - look up the documentation for how to check if data is an array or not
//
// Examples:
//
// array_1 = [1, 2, [[3, 4], [5, [6]]], [7, 8]]
// flatten(array_1)      // => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
//
// array_2 = ['this', ['problem', 'is'], [['pretty', 'tough'], [[':)']]]]
// flatten(array_2)      // => [ 'this', 'problem', 'is', 'pretty', 'tough', ':)' ]
//
// flatten('base case')  // => [ 'base case' ]
//
// Another Hint:
//
// From the last example, you may be confused. We said that the method takes
// in an array as an arg, but we passed it a string?
// If data is not an array, then we can consider it as a 0-dimensional array.
//     0-dimensional array: 'some data'
//     1-dimensional array: ['some data']
//     2-dimensional array: [['some data']]
//     3-dimensional array: [[['some data']]]
function flatten(data) {
    if(!Array.isArray(data)) return [data];

    let flattenedArray = [];
    data.forEach( (ele) => {
        if(Array.isArray(ele)) {
            flattenedArray = flattenedArray.concat(flatten(ele));
        } else {
            flattenedArray = flattenedArray.concat([ele]);
        }
    })
    return flattenedArray;
}

/** Pseudocode
 * Base case: data is not an array, return the data as-is
 * Recursive step: data is an array. check if each element is an array, and call flatten on elements that are arrays, then add to flattened array
 * 
 */

// Write a function, fileFinder(directories, targetFile), that accepts an object representing directories and a string respresenting a filename.
// The function should return true, if the file is contained anywhere in the given directories.
// Note that directory names will begin with '/', but file names will not.
// 
// Example:
//
// let desktop = {
//     '/images': {
//         'app_academy_logo.svg': null,
//         '/parks': {
//             'yosemite.jpeg': null,
//             'acadia.jpeg': null,
//             'yellowstone.png': null
//         },
//         '/pets': {
//             'trixie_lou.jpeg': null,
//             'rolo.jpeg': null,
//             'opal.jpeg': null,
//             'diana.jpeg': null,
//         }
//     },
//     '/music': {
//         'hey_programmers.mp3': null,
//         '/genres': {
//             '/rock': {
//                 'everlong.flac': null,
//                 'livin_on_a_prayer.mp3': null
//             },
//             '/hip_hop': {
//                 'express_yourself.wav': null,
//                 'ny_state_of_mind.mp3': null
//             }
//         }
//     }
// };
//
// fileFinder(desktop, 'app_academy_logo.svg');     // => true
// fileFinder(desktop, 'everlong.flac');            // => true
// fileFinder(desktop, 'sequoia.jpeg');             // => false
function fileFinder(directories, targetFile) {
    let found = false;
    let keys = Object.keys(directories);

    for(let i = 0; i < keys.length; i++) {
        if(keys[i][0] === '/'){
            found = fileFinder(directories[keys[i]], targetFile);
            if(found) return found;
        } else {
            if(keys[i] === targetFile) return true;
        }
    }

    return false;
}

/** Pseudocode
 * Goal: find the key that matches targetFile
 * 
 * Base case: Not found in directory, return false; found return true immediately
 * Recursive step: key is a directory, call fileFinder with value and targetFile
 */

// Write another function, pathFinder(directories, targetFile), that returns the path that contains the targetFile.
// If the targetFile is not found in the directories, then return null.
// You can assume the files are unique.
//
// Example using the same desktop from previously:
//
// pathFinder(desktop, 'trixie_lou.jpeg'));     // => '/images/pets/trixie_lou.jpeg'
// pathFinder(desktop, 'everlong.flac'));       // => '/music/genres/rock/everlong.flac'
// pathFinder(desktop, 'honeybadger.png'));     // => null
function pathFinder(directories, targetFile) {
    let path = "";
    let keys = Object.keys(directories);

    for(let i = 0; i < keys.length; i++) {
        if(keys[i][0] === '/'){
            if(fileFinder(directories[keys[i]], targetFile)) {
                path += keys[i] + pathFinder(directories[keys[i]], targetFile);
                return path;
            }
        } else {
            if(keys[i] === targetFile) {
                path += "/" + targetFile;
                return path;
            }
        }
    }

    return null;
}

/** Pseudocode
 * Base case: file is found, return / + file name
 * Recursie step: key indcates a directory, add key to path and call path finder on the subdirectory
 */

module.exports = {
    lucasNumber,
    sumArray,
    reverseString,
    pow,
    flatten,
    fileFinder,
    pathFinder
};