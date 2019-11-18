var Singleton = (function () {
    let instance =null;
    let index=1;

    function getInstance() {
        console.log("Creating i"+index)
        if(instance === null){
            instance=new Date();
        }
        console.log("i"+index+" was created in time: ", new Date().getTime());
        index++;
        return instance;
    }

    return {
        getInstance: getInstance
    };


})();

console.log("Testing Singleton!");
const firstInstance = Singleton.getInstance();
const secondInstance = Singleton.getInstance();

console.log("Checking if they are the same variable: "+ (firstInstance===secondInstance));

console.log("Creating i3 in different execution context");

setTimeout(()=>{
    const thirdInstance = Singleton.getInstance();

    console.log("Checking if i1 and i3 they are the same variable: "+ (firstInstance===thirdInstance));
    console.log("Checking if i2 and i3 they are the same variable: "+ (secondInstance===thirdInstance));
    console.log("Checking if i1 and i2 they are the same variable: "+ (firstInstance===secondInstance));
}, 2000);
