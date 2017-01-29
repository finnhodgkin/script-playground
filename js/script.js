function create(tag) { return document.createElement(tag); }
function get (id) { return document.getElementById(id); }
function getTag(tag) { return Array.from(document.getElementsByTagName(tag)); }
function getClass(c) { return Array.from(document.getElementsByClassName(c)); }

get('main').appendChild(create('ul')).classList = 'YES';
get('main').appendChild(create('ul'));
get('main').appendChild(create('ul'));
get('main').appendChild(create('ul'));
get('main').appendChild(create('ul'));
get('main').appendChild(create('ul'));

getTag('ul').forEach(function (e, i) {
  e.appendChild(create('li')).id = 'li' + i;
  e.appendChild(create('li')).id = 'li' + i;
});


class Animals {
  constructor(array) {
    this.sounds = array;
  }
  randomSound (array) {
    const len = this.sounds.length;
    return this.sounds[Math.floor(Math.random() * len)];
  }
}

function AnimalsOLD (array) {
    this.sounds = array;
    this.randomSound = function (array) {
      const len = this.sounds.length;
      return this.sounds[Math.floor(Math.random() * len)];
    };
}

const cat = new Animals(['sound1', 'sound2', 'sound3', 'sound4']);
const cat2 = new AnimalsOLD(['sound1', 'sound2', 'sound3', 'sound4']);
console.log(cat.randomSound())
console.log(cat2.randomSound())
