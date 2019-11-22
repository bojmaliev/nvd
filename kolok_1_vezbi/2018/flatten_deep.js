Array.prototype.flatten_deep = function () {
    let retArr = [];
    for (let a of this){
        if(Array.isArray(a)){
            retArr = [...retArr, ...a.flatten_deep()];
        }else{
            retArr = [...retArr, a];
        }
    }
    return retArr;
};



let arr = [1, [2, [3, [4,5,6], [7,8]]]];

let flat_arr = arr.flatten_deep();

console.log(flat_arr);