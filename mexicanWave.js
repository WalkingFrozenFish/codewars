// Kata 26 - Mexican Wave
function wave(str) {
    let resultArray = [];

    for(var i = 0; i < str.length; i++) {
        let strToArr = str.toLowerCase().split("");

        if (strToArr[i] === " ") {
            continue;
        } else {
            strToArr[i] = strToArr[i].toUpperCase("");
        }

        resultArray.push(strToArr.join(""));
    }

    // console.log(resultArray);
    return resultArray;

}


wave("hello");
wave("codewars");
wave("");
wave("two words");
wave(" gap ");