// arguments version
Function.prototype.myBind = function () {
    let that = this;
    let ctx = arguments[0];
    let bind_rest = Array.prototype.slice.call(arguments, 1);
    // console.log(rest)
    return function () {
        let call_rest = Array.prototype.slice.call(arguments);
        let args = bind_rest.concat(call_rest);

        that.apply(ctx, args);
        // .apply(context, [arg1, arg2, ..])
    }
}




// ...rest version
// Function.prototype.myBind = function (ctx, ...bind_args) {
//     let that = this;
//     return function(...call_args) {
        // that.call(ctx, ...bind_args, ...call_args);
//     }
// }

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true