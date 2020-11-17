let car1 = {
    "make": "Honda",
    "year": 1998,
    "model1":"Civic"
};

let car2 = {
    "year":2010,
    "model":"Accord"
};

class Car {
    constructor(make, model, year) {

        if (year > 2021) {
            console.log("Are you sure about the year for" + make + model +"? It seems to be awefully high!");
            this .year = NaN;
        }
        this.make = make;
        this.year=year;
        this.model =model;
        this.currentFuelGallons = 0;
        this.fuleCapacity = 15;
        this.registeredData = new Date(Date.now());
    }
        checkFuel() {
            console.log(`The car ${this.model} has ${this.currentFuelGallons} of gallons of gas left in the tank.`);
        }
    
        refuel(gallons) {
            if (typeof gallons === "number") {
            this.currentFuelGallons = this.currentFuelGallons + gallons;
            console.log("Refuel successful, added" + gallons +"to the tank.");
        } else {
            console.log("Refueling needs a valid number!");
        }
    }
}

   
let car3 = new Car("Tesla","X", 2016);
let car4 = new Car("Chevy", "Bolt", 2016);
let car6 = new Car2("Voltswagen", "Golf II", 19800);

car4.checkFuel();