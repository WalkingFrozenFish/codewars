// Kata 11 - Get the Middle Character
function getMiddle(s) {
    
    let startPosition;
    let result;

    if (s.length % 2 === 0) {
        startPosition = s.length / 2 - 1;
        result = s.substr(startPosition, 2);
        return result;
    } else {
        startPosition = Math.floor(s.length / 2);
        result = s.substr(startPosition, 1);
        return result;
    }

}


getMiddle("test"); // "es"
getMiddle("testing"); // "t"
getMiddle("middle"); // "dd"
getMiddle("A"); // "A"