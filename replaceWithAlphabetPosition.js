// Kata 15 - Replace With Alphabet Position
function alphabetPosition(text) {
    let toLowerCaseAndArr = text.toLowerCase().split("");
    let resultArray = [];

    toLowerCaseAndArr.map(function (item) {

        let charCode = item.charCodeAt(0)

        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123)) {
            resultArray.push(charCode - 96)
        }
    });

    return resultArray.join(" ");
}

alphabetPosition("The sunset sets at twelve o' clock.") // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
alphabetPosition("The narwhal bacons at midnight.") // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

