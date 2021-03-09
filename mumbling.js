// Kata 8 - Mumbling
function accum(s) {
    s = s.toLowerCase();
    let charsArray = s.split("");
    let returnArray = [];

    for (let i = 0; i < charsArray.length; i++) {
        returnArray.push(charsArray[i].repeat(i + 1));
    }

    let newArray = returnArray.map(function(item) {
        return item[0].toUpperCase() + item.substring(1);
 
    })

    return newArray.join("-");
}

accum("ZpglnRxqenUy");