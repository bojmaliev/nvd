function call_up_to(number, funcToCall) {
    let numberCalled = 0;
    let lastValueReturned;

    return function () {
        if (numberCalled !== number) {
            numberCalled++;
            lastValueReturned = funcToCall();
        }
        return lastValueReturned;
    }
}

function myFunction() {
    return Date.now();
}
let limitedFunction = call_up_to(3, myFunction)

console.log(limitedFunction());
setTimeout(() => {
    console.log(limitedFunction());
}, 100);
setTimeout(() => {
    console.log(limitedFunction());
}, 220);
setTimeout(() => {
    console.log(limitedFunction());
}, 302);
setTimeout(() => {
    console.log(limitedFunction());
}, 404);
setTimeout(() => {
    console.log(limitedFunction());
}, 550);
