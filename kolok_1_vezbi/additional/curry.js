function curry(func) {
    let number = func.length;
    let args = [];
    return function createFunction(a) {
        number--;
        args.push(a);
        if (number === 0) {
            return func.apply({}, args);
        } else {
            return createFunction;
        }
    }
}

function sum(a, b, c, d) {
    return a + b + c + d;
}


let newFunction = curry(sum);

console.log(newFunction(1));
console.log(newFunction(2));
console.log(newFunction(3));
console.log(newFunction(4));