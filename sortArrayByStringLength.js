// Kata 12 - Sort array by string length
function sortByLength(array) {

    array.sort(function(a, b) {
        return a.length - b.length;
    });

    return array;

};

sortByLength(["Beg", "Life", "I", "To"]); // ["I", "To", "Beg", "Life"]
sortByLength(["", "Moderately", "Brains", "Pizza"]); // ["", "Pizza", "Brains", "Moderately"]
sortByLength(["Longer", "Longest", "Short"]); // ["Short", "Longer", "Longest"]