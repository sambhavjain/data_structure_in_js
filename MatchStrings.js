/**
 * 
 *
 * Problem Description
Given two strings A and B each of size N consisting of lowercase alphabets. You can perform the following operations any number of time:  
Select any two characters in string A and swap the characters.
Select any two characters in string B and swap the characters.
Select a character in string A and select a character in string B. Swap the characters from both strings.
 Return 1 if it possible to make strings equal else return 0.  
  @param {} a 
 * @param {} b 
 */

const matchStrings = ( a, b ) => {
    const freqA = {};
    const freqB = {};
    const arrA = a.split('');
    const arrB = b.split('');
    let isPossible = true;

    if(arrA.length !== arrB.length){
        isPossible = false;
    } else {
        arrA.forEach(char => {
            if(!freqA[char]){
                freqA[char] = 1;
            } else {
                freqA[char] ++;
            }
        })
        arrB.forEach(char => {
            if(!freqB[char]){
                freqB[char] = 1;
            } else {
                freqB[char] ++;
            }
        })
    
        if(Object.keys(freqA).length !== Object.keys(freqB).length) {
            isPossible = false;
        }
    }
    return isPossible;
}

console.log(matchStrings('adbc', 'abdc'));
console.log(matchStrings('abbc', 'abdc'));