
function deep_clone(object) {
    let newOb = new object.constructor();

    for(let key of Object.keys(object)){
        let type = typeof object[key];
        if( type === "object" || type==="function"){
            newOb[key] = deep_clone(object[key])
        }else{
            newOb[key] = object[key];
        }
    }
    return newOb;
}


class TT{

    constructor(){

    }
}

let obj = {martin:1, hehe:function(){}, kk:[1,2,3], rr:new TT(), r:"dsadsa", obj:{tata:"tata"}};

let newOb = deep_clone(obj);

console.log(newOb===obj);
console.log(newOb.hehe===obj.hehe);
console.log(newOb.kk===obj.kk);
console.log(newOb.obj.tata === obj.obj.tata);

