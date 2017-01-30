// class Animals {
//   constructor(array) {
//     this.sounds = array;
//   }
//   randomSound (array) {
//     const len = this.sounds.length;
//     return this.sounds[Math.floor(Math.random() * len)];
//   }
// }
//
// function AnimalsOLD (array) {
//     this.sounds = array;
//     this.randomSound = function (array) {
//       const len = this.sounds.length;
//       return this.sounds[Math.floor(Math.random() * len)];
//     };
// }
//
//
//
// const cat = new Animals(['sound1', 'sound2', 'sound3', 'sound4']);
// const cat2 = new AnimalsOLD(['sound1', 'sound2', 'sound3', 'sound4']);
// console.log(cat.randomSound());
// console.log(cat2.randomSound());
