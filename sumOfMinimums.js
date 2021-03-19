// Kata 24 - Sum of Minimums
function sumOfMinimums(arr) {

    let result = 0;

    for (let i = 0; i < arr.length; i++) {
        arr[i].sort(function(a, b) {
            return a - b;
        })
        result += arr[i][0]
    }

    // console.log(result)
    return result;
}

sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) // 9
sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]) // 76
