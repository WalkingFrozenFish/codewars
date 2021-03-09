// Kata 7 - Reverse words
function reverseWords(str) {
    let words = str.split(" ");
    let arrayWords = [];

    for (let i = 0; i < words.length; i++) {
        let reverseWords = words[i].split("").reverse().join("");
        arrayWords.push(reverseWords) 
    }
    return arrayWords.join(" ");
}

reverseWords('The quick brown fox jumps over the lazy dog.') // 'ehT kciuq nworb xof spmuj revo eht yzal .god'