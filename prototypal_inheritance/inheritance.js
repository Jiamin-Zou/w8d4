// Surrogate style

// Function.prototype.inherits = function(superClass) {
//     const subClass = this;
//     function Surrogate() {};
//     Surrogate.prototype = superClass.prototype;
//     subClass.prototype = new Surrogate;
//     subClass.prototype.constructor = subClass;
// }

// Object.create style

Function.prototype.inherits = function(superClass) {
    const subClass = this;
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
}


function MovingObject (name) {
    this.name = name;
}

function Ship (name) {
    // MovingObject.call(this);
    this.name = name;
}
Ship.inherits(MovingObject);

function Asteroid (name) {
    this.name = name;
    // MovingObject.call(this);
    // this.size = size
}
Asteroid.inherits(MovingObject);



MovingObject.prototype.move = function (dir) {
    console.log(`${this.name} is moving ${dir}`);
}

Ship.prototype.sail = function () {
    console.log(`${this.name} is sailing the ocean.`);
}

Asteroid.prototype.soar = function() {
    console.log(`${this.name} is flying through space`);
}



const wheel = new MovingObject("Wheel");
const ssj = new Ship("SSJ");
const harvey = new Asteroid("Harvey");
