
function create(tag) { return document.createElement(tag); }
function text(text) { return document.createTextNode(text); }
function remove(id) { id.parentElement.removeChild(id); }

function get (id) { return document.getElementById(id); }
function getTag(tag) { return Array.from(document.getElementsByTagName(tag)); }
function getClass(c) { return Array.from(document.getElementsByClassName(c)); }

(function () {

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
  'reset', '(', ')', 'equals',
  '1', '2', '3', 'multiply',
  '4', '5', '6', 'divide',
  '7', '8', '9', 'add',
  '0', 'dec', 'minus'
 ].map(addButton);

const symbols = {
  reset: 'C',  equals: '=',
  '(': '(',  ')': ')',
  1: '1', 2: '2', 3: '3',
  4: '4', 5: '5', 6: '6',
  7: '7', 8: '8', 9: '9',
  0: '0', dec: '.',
  multiply: 'x', divide: '÷',
  add: '+', minus: '-'
};

calculator.appendChild(panel).className = 'calc__panel';
buttons.forEach(btn => {
  let txt = text(symbols[btn.id.slice(5)]);
  btn.appendChild(txt);
  calculator.appendChild(btn);
  btn.addEventListener('click', (e) => {
    let op = e.target.innerHTML;
    if (op === 'C') {
      panel.innerHTML = '';
      return;
    } else if (op === '=') {
      if (/^[0-9]+$/.test(panel.innerHTML.slice(-1)) ||
          panel.innerHTML.slice(-1) === ')') {
        panel.innerHTML = panel.innerHTML.replace('x', '*').replace('÷', '/');
        panel.innerHTML = eval(panel.innerHTML);
        return;
      } else {
        return;
      }
    } else if (op === '(') {
      if (!/^[0-9]+$/.test(panel.innerHTML.slice(-1)) &&
          panel.innerHTML.slice(-1) !== '(') {
        panel.innerHTML += op;
        return;
      } else { return; }
    }
    if (/^[0-9]+$/.test(op) || // button is a number
        /^[0-9]+$/.test(panel.innerHTML.slice(-1))) { // if last is a number
      panel.innerHTML += op;
    }
    if (panel.innerHTML.slice(-1) );

  });
});

calculator.appendChild(create('div')).className = 'clear'; // add clear to calc
remove(get('noJS')); // remove no JS warning.
})();
