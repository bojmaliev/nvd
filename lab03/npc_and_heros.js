
function getRandomObj(array, func){
    const newArr = array.filter(func);
    const randomIndex = Math.floor(Math.random() * newArr.length);
    return newArr[randomIndex];
}
class NPC{
    constructor(name, hitPoints=100){
        this.name = name;
        this.hitPoints = hitPoints;
    }
    isDead(){
        return this.hitPoints===0;
    }
    status(){
        console.log("Name: "+(this.constructor.name)+" "+this.name+" Health:"+this.hitPoints);
    }
}

class Hero extends NPC{
    constructor(name, hitPoints, damage=10) {
        super(name, hitPoints);
        this.damage = damage;
        this.critical = false;

    }
    attack(obj){
        if(obj instanceof NPC || obj instanceof Hero){
            obj.hitPoints-= (this.critical ? this.damage*1.5 : this.damage);
            if(obj.hitPoints < 0)obj.hitPoints=0;

            if(this.critical && obj instanceof Hero){
                this.critical=false;
                obj.critical=true;
            }
            console.log("NEW ATTACK");
            this.status();
            console.log("is Attacking");
            obj.status();
        }
    }



}

let players = [];
let N = Math.floor(Math.random() * 40)+10;
for(let i=0; i<N; i++){
    if(i%2===0)players.push(new Hero(i));
    else players.push(new NPC(i));
}
getRandomObj(players, a=> a instanceof Hero).critical=true;


while(players.length>1){
    const attacker = getRandomObj(players, a=> a instanceof Hero);
    const attacked = getRandomObj(players, a=> a !== attacker);

    attacker.attack(attacked);
    if(attacked.isDead()){
        const toDel = players.indexOf(attacked);
        players.splice(toDel, 1);
    }
}
const winner = players.pop();
console.log("Winner: ");
winner.status();
