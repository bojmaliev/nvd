Array.prototype.fillDefault = function(valueToFill) {
    for(let i=0; i<this.length; i++){
        if(typeof this[i] === "undefined")this[i]=valueToFill;
    }
};

let x = [1, 2, 4];
x[10] = 100;
x[8] =8;

console.log(x.toString());
x.fillDefault(0);
console.log(x.toString());