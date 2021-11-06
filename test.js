// const dog = {
//   sound: "woof",
//   speak: function() {
//     console.log(this.sound);
//   }
// };

const { lstat } = require("fs");

// dog.speak();

// const dog = {
//   sound: "woof",
//   speak: function() {
//     console.log(this.sound);
//   },
//   teachMeSomething: function() {
//     if (dog === this) {
//       console.log('dog === this');
//     }
//     this.speak();
//   }
// };

// dog.teachMeSomething();
const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  }
};

dog.sound = "🐶"
dog.speak();