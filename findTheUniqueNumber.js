// Kata 28 - Find the unique number
function findUniq(arr) {
    let sortedArr = arr.sort(function(a, b) {
        return a - b
    })

    if (sortedArr[0] != sortedArr[1]) {
        console.log("Number", sortedArr[0])
        return sortedArr[0]
    } else {
        console.log("Number", sortedArr[sortedArr.length - 1])
        return sortedArr[sortedArr.length - 1]
    }

}


findUniq([0, 1, 0]) // 1
findUniq([1, 1, 1, 2, 1, 1]) // 2
findUniq([3, 10, 3, 3, 3]) // 10