// Kata 22 - Row Weights
function rowWeights(array) {
    let first = 0;
    let second = 0;

    let resultArr = [];

    for (var i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            first += array[i]
        } else if (i % 2 != 0) {
            second += array[i]
        }
    }

    resultArr.push(first);
    resultArr.push(second);

    return resultArr;
}

rowWeights([80]) // [80, 0]
rowWeights([100, 50]) // [100, 50]
rowWeights([50, 60, 70, 80]) // [120, 140]
rowWeights([13, 27, 49]) // [62, 27]
rowWeights([70, 58, 75, 34, 91]) // [236, 92]
rowWeights([29, 83, 67, 53, 19, 28, 96]) // [211, 164]
rowWeights([0]) // [0, 0]
rowWeights([100, 51, 50, 100]) // [150, 151]
rowWeights([39, 84, 74, 18, 59, 72, 35, 61]) // [207, 235]
rowWeights([0, 1, 0]) // [0, 1]
