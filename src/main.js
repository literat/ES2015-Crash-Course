function sum(...numbers) {
    /*return numbers.reduce(function (prev, current) {
        return prev + current;
    })*/

    return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3, 4, 5));

function sum2(x, y) {
    return x + y;
}

let nums = [1, 2]
console.log(sum(...nums));