var CardTypes = [
{ name: "vue", image: "img/vue.png" },
{ name: "express", image: "img/express.jpg" },
{ name: "mongo", image: "img/mongo.png" },
{ name: "nodejs", image: "img/nodejs.svg" },
{ name: "webpack", image: "img/webpack.png" },
{ name: "babel", image: "img/babel.svg" }];

let shuffle = (arr) => {
    let newArr = [];
    while(arr.length > 0){
        var index = Math.floor(Math.random()*arr.length);
        newArr.push(arr[index]);
        arr.splice(index, 1);
    }
    return newArr;

};
let doubleList = (arr) =>{
    let newList = [];
    arr.forEach(a=>{
        newList.push({name:a.name, image:a.image});
        newList.push({name:a.name, image:a.image});
    });
    return newList;
};

let app = new Vue({
    el:"#app",
    data:{
        cards: [],
        turns:0,
        time:0,
        timeOut:null,
        game:false,
        score:0,
    },
    methods:{
        init:function () {
            this.cards = shuffle(doubleList(CardTypes)).map(a => {a.found=false; a.flipped= false; return a; });
            clearInterval(this.timeOut);
            this.timeOut =null;
            this.time = 0;
            this.game = false;
            this.score=0;
            this.turns = 0;
        },
        flip: function (card) {
            if(!this.timeOut)this.timeOut = setInterval(()=>{this.time++}, 1000);
            let flipped = this.cards.find(a=> a.flipped===true && a.found === false);
            card.flipped = true;
            if(flipped){
                this.turns++;
                if(flipped.image === card.image){
                    flipped.found = true;
                    card.found = true;
                    this.foundCard();

                }else{
                    setTimeout(this.returnNonFound, 500);
                }
            }
        },
        returnNonFound:function () {
            this.cards.filter(a=>a.found === false).map(a=> {a.flipped = false; return a;});
        },
        foundCard:function () {
            let notFound = this.cards.find(a=> a.found === false);
            if(!notFound){
                clearInterval(this.timeOut);
                this.game = true;
            }

        }
    },
    created:function () {
        this.init()
    }
});

