function create(tag) { return document.createElement(tag); }
function text(text) { return document.createTextNode(text); }
function remove(id) { id.parentElement.removeChild(id); }

function get (id) { return document.getElementById(id); }
function getTag(tag) { return Array.from(document.getElementsByTagName(tag)); }
function getClass(c) { return Array.from(document.getElementsByClassName(c)); }

function addButton(e) {
  const el = create('div');
  el.id = 'calc-' + e;
  el.className = 'calc__button';
  return el;
}
function addContainer(e, addclass) {
  const el = create('div');
  el.id = 'calc-' + e;
  el.className = addclass ? 'calc__' + addclass : 'calc__button';
  return el;
}

const calculator = get('calculator');
const panel = create('div');
const buttons = [
  'reset', 'equals', 'squareR', 'temp',
  '1', '2', '3', 'multiply',
  '4', '5', '6', 'divide',
  '7', '8', '9', 'add',
  '0', 'dec', 'minus'
 ].map(addButton);

const symbols = {
  reset: 'C',  equals: '=',
  squareR: '√',  temp: 'temp',
  1: '1', 2: '2', 3: '3',
  4: '4', 5: '5', 6: '6',
  7: '7', 8: '8', 9: '9',
  0: '0', dec: '.',
  multiply: 'x', divide: '÷',
  add: '+', minus: '-'
};

calculator.appendChild(panel).className = 'calc__panel';
buttons.forEach(operator => calculator.appendChild(operator));

remove(get('noJS')); // remove no JS warning.
