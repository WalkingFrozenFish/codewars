// Kata 31 - Break camelCase
function solution(string) {
    console.log(string.split(""));
    let newArr = string.split("");
    let str = [];
    for (const iterator of newArr) {
        if (iterator == iterator.toUpperCase()) {
            str.push(" ");
            str.push(iterator);
        } else {
            str.push(iterator);
        }
    }

    console.log(str.join(""))
}


solution('camelCasing') // 'camel Casing'
solution('camelCasingTest') // 'camel Casing Test'
