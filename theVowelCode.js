// Kata 25 - The Vowel Code
function encode(string) {
    // a -> 1
    // e -> 2
    // i -> 3
    // o -> 4
    // u -> 5

    let i = true;
    while (i == true) {

        let replaceA = /a/gi;
        let replaceE = /e/gi;
        let replaceI = /i/gi;
        let replaceO = /o/gi;
        let replaceU = /u/gi;

        string = string.replace(replaceA, 1);
        string = string.replace(replaceE, 2);
        string = string.replace(replaceI, 3);
        string = string.replace(replaceO, 4);
        string = string.replace(replaceU, 5);

        i = false;
    }

    // console.log(string);
    return string;

}

function decode(string) {
    let i = true;
    while (i == true) {

        let replaceA = /1/gi;
        let replaceE = /2/gi;
        let replaceI = /3/gi;
        let replaceO = /4/gi;
        let replaceU = /5/gi;

        string = string.replace(replaceA, "a");
        string = string.replace(replaceE, "e");
        string = string.replace(replaceI, "i");
        string = string.replace(replaceO, "o");
        string = string.replace(replaceU, "u");

        i = false;
    }

    // console.log(string);
    return string;
}


encode('hello') // 'h2ll4'
encode('How are you today?') // 'H4w 1r2 y45 t4d1y?'
encode('This is an encoding test.') // 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4') // 'hello'



