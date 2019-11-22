class Character {
    constructor(name) {
        this.hitPoints = 100;
        this.name = name;
    }

    attack(obj) {
        if (obj instanceof Character) {
            let r = Math.floor(Math.random() * 10);
            if (r > 2) {
                obj.hitPoints -= 5;
                if (obj.hitPoints < 0) obj.hitPoints = 0;
            }

        }
    }

    status() {
        console.log(this.name + " (" + this.hitPoints + ")")
    }

}

let players = [];
for (let i = 0; i < Math.floor(Math.random() * 10) + 10; i++) {
    players.push(new Character("My name is " + i));
}
let runda=1;
while(players.length>1){
    console.log("RUNDA "+runda);
    runda++;
    let attacker = players[Math.floor(Math.random()*players.length)];
    let notMe = players.filter(a=> a!==attacker);
    let looser =  notMe[Math.floor(Math.random()*notMe.length)];
    attacker.attack(looser);
    if(looser.hitPoints===0){
        let index = players.indexOf(looser);
        players.splice(index, 1);
    }
    players.forEach(a=>a.status());

}

console.log("WINNER");
players.pop().status();