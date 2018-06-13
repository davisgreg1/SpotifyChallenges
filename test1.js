/**
|--------------------------------------------------
| Question 1 -- sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters. 
For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw". For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
|--------------------------------------------------

pseudo:
putt all the same letters in an object...according to 't'
then build a word from the values
*/

const sortByStrings = (s, t) => {
    if(!s.length || !t.length){
        return `Please submit 2 words`
    }
    if(s.length < 2){
        return s
    }
    let strObj = {};
    let newStr = "";
    for (let letter of s) {
        if (!strObj[letter]) {
            strObj[letter] = 1
        } else {
            strObj[letter]++
        }
    }
    for(let char of t){
        if(strObj[char]){
           newStr += char.repeat(strObj[char])
        }
    }
    return newStr
}
// console.log(sortByStrings("e", "therapyw")) //=>"theeraw"
// console.log(sortByStrings("good", "odg")) //=>"oodg"
// console.log(sortByStrings("gregory", "ggeor")) //=>"geor"
console.log(sortByStrings("ge", "eggor")) //=>"geor"