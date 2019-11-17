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
