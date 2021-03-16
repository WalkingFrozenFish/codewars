// Kata 18 - Find the stray number
function stray(numbers) {
    numbers.sort(function (a, b) {
        return a - b
    });

    if (numbers[0] == numbers[1]) {
        return numbers[numbers.length - 1];
    } else {
        return numbers[0];
    }
}

stray([1, 1, 2]);
stray([2, 1, 1, 1, 1, 1]);
stray([2, 2, 2, 2, 1]);