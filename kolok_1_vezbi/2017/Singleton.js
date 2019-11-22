let Singleton = (function () {
    let instance = null;

    function getInstance() {
        if (instance === null) {
            instance = Date.now();
        }
        return instance;
    }

    return {
        getInstance: getInstance
    }
})();

console.log(Singleton.getInstance());

setTimeout(() => {
    console.log(Singleton.getInstance());
}, 1000);