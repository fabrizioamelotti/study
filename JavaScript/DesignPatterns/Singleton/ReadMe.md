# Singleton Pattern
Singleton is a special creational design pattern in which only one instance of a class can exist.
It works like this — if no instance of the singleton class exists then a new instance is created and returned, but if an instance already exists, then the reference to the existing instance is returned.

Example:
```javascript
class Dinosaur {
    constructor (data) {
        if (Dinosaur.exists) {
            return Dinosaur.instance;
        }

        Dinosaur.instance = this;
        Dinosaur.exists = true;
        this._data = data;
    }

    getData() {
        return this._data;
    }

    setData(newData) {
        this._data = newData;
    }
}

const tRex = new Dinosaur('TRex');
console.log(tRex.getData());
// TRex

const velociraptor = new Dinosaur('Velociraptor');
console.log(velociraptor.getData());
// TRex
```
