// Kata 16 - Complementary DNA
function DNAStrand(dna) {

    let dnaToArr = dna.split("");

    for (let i = 0; i < dnaToArr.length; i++) {

        if (dnaToArr[i] == "A") {
            dnaToArr[i] = "T";
        } else if (dnaToArr[i] == "T") {
            dnaToArr[i] = "A";
        } else if (dnaToArr[i] == "C") {
            dnaToArr[i] = "G";
        } else if (dnaToArr[i] == "G") {
            dnaToArr[i] = "C";
        }

    }
    return dnaToArr.join("");
}


DNAStrand("AAAA") // "TTTT", "String AAAA is"
DNAStrand("ATTGC") // "TAACG", "String ATTGC is"
DNAStrand("GTAT") // "CATA", "String GTAT is"