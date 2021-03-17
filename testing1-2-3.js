// Kata 20 - Testing 1-2-3
var number = function (array) {

    var newArray = array.map(function(item, index) {
        return `${index + 1}: ${item}`;    
    });

    return newArray;

}


number([]) // [], 'Empty array should return empty array'
number(["a", "b", "c"]) // ["1: a", "2: b", "3: c"], 'Return the correct line numbers'