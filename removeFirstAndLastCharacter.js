// Kata 3 - Remove First and Last Character
function removeChar(str) {
    let arrayFromStr = str.split("");

    let removeLastChar = arrayFromStr.pop();
    let removeFirstChar = arrayFromStr.shift();

    let strFromArray = arrayFromStr.join("");

    return strFromArray;

    // Or
    // return str.slice(1, -1);
};