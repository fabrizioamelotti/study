class Hero {
    constructor() {
        this._energy = 100;
    }
    getEnergy() {
        return this._energy;
    }
}

class Fly {
    constructor(hero) {
        const energy = hero.getEnergy();
        hero.getEnergy = function () {
            return energy + 10;
        };
    }
}

class SuperStrength {
    constructor(hero) {
        const energy = hero.getEnergy();
        hero.getEnergy = function () {
            return energy + 100;
        };
    }
}

class Fury {
    constructor(hero) {
        const energy = hero.getEnergy();
        hero.getEnergy = function () {
            return energy + 1000;
        };
    }
}

const myHero = new Hero();
console.log(myHero.getEnergy()); // 100

new Fly(myHero);
console.log(myHero.getEnergy()); // 110

new SuperStrength(myHero);
console.log(myHero.getEnergy()); // 210

new Fury(myHero);
console.log(myHero.getEnergy()); // 1210
