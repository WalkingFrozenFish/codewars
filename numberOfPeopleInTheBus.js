// Kata 5 - Number of People in the Bus
var number = function (busStops) {
    let firstCount = 0;
    let secondCount = 0;
    let result = 0;
    for (let i = 0; i < busStops.length; i++) {
        let first = busStops[i][0];
        let second = busStops[i][1];

        firstCount += first;
        secondCount += second;

        result = firstCount - secondCount;
    }
    return result;
}

number([[10, 0], [3, 5], [5, 8]]);
number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]);
number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]);