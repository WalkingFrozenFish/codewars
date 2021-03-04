// Kata 4 - Categorize New Member
function openOrSenior(data) {
    let finalArray = [];
    for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        let item = data[i];
        if (item[0] >= 55 && item[1] > 7) {
            finalArray.push("Senior");
        } else {
            finalArray.push("Open");
        }
    }
    return finalArray;
};