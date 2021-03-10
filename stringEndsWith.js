// Kata 9 - String ends with?
function solution(str, ending) {
    let lengthStr = ending.length;
    let subStr = str.substr(-lengthStr, lengthStr);
    console.log(subStr == ending);
}

solution('abcde', 'cde');
solution('abcde', 'abc');