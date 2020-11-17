class Animal {
    constructor(alive) {
        this.living = alive;
    }

    died() {
        this.living = false;
    }
}


class Mammal extends Animal {
    constructor(alive) {
        super(alive);
        this.tail =1;
        this.type = "mammal";
        this.eyes = 2;
    }

    eat() {
        if ("name" in this) { 
            console.log(this.name + "eats some food");
    } else {
            console.log("Animal eats some food");
    }
}

    breed(partner) {
        if (partner.constructor.name == this.constructor.name) {
            let child = 
            new
        }
    }
}


class Dog extends Mammal {
    constructor(dogName, alive) {

        super(alive);
        this.legs = 4;
        this.name = dogName;
    }

    bark() {
        console.log("woof woof!");
}
}

class Cat extends Mammal{
    constructor(catName, alive) {
        super(alive);
        this.legs = 4;
        this.name = catName;
    }

    meow() {
        console.log("meow meow!");
    }
}

let animal1 = new Dog("Fido", true);
let animal2 = new Cat("Garfield",true);

// animal1.bark();
// animal1.eat();
// console.log(animal.living);
// animal2.eat();
// animal2.meow();
// console.log(animal2.living);

// animal
