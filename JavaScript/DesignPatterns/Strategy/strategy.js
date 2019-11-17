// Encapsulation
class Commute {
    travel(transport) {
        return transport.travelTime();
    }
}

class Vehicle {
    constructor() {
        if (new.target === Vehicle) {
            // Because Vehicle is an abstract class
            throw new TypeError("Cannot construct Vehicle instance directly");
        }
    }
    travelTime() {
        return this._time;
    }
}

// Strategy 1
class Bus extends Vehicle {
    constructor() {
        super();
        this._time = 10;
    }
}

// Strategy 2
class Taxi extends Vehicle {
    constructor() {
        super();
        this._time = 5;
    }
}

// Strategy 3
class Car extends Vehicle {
    constructor() {
        super();
        this._time = 3;
    }
}

// usage
const commute = new Commute();

console.log(commute.travel(new Taxi())); // 5
console.log(commute.travel(new Bus())); // 10
console.log(commute.travel(new Car())); // 3

const vehicle = new Vehicle();
// error: Uncaught TypeError: Cannot construct Vehicle instance directly
