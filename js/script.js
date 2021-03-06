
function text(text) { return document.createTextNode(text); }
function remove(id) { id.parentElement.removeChild(id); }

function create (tag, ...props) {
  tag = tag || 'div'; // default to div
  const el = document.createElement(tag); //build element
  props.forEach(prop => { // build element props / nested elements
    if (typeof prop === 'object') {
      if (prop instanceof Node) { // if node element then nest
        el.appendChild(prop);
      } else {
        Object.keys(prop).forEach(key => { // build properties
          let property = key.split('.'); // if dot notation in props
          if (property[0] === 'style') { // check if dot notation was 'style'
            property[1] in el.style ? // if style exists
              el.style[property[1]] = prop[key] : // apply style
              console.warn(property[1] + ' is not a style'); // or poss error
            return;
          }
          el[key] = prop[key]; // apply non-style property
        });
      }
    } else {
      prop.slice(0,1) === '#' ? el.id = prop.slice(1) : // add id
      prop.slice(0,1) === '.' ? el.className += el.className ? // add class
        ' ' + prop.slice(1) :
        prop.slice(1) :
      el.appendChild(text(prop));
    }
  });
  return el;
}

const div = (...props) => create('div', ...props);
const h1 = (...props) => create('h1', ...props);
const p = (...props) => create('p', ...props);
const a = (link, ...props) => create('a', { href:link }, ...props);
const span = (...props) => create('span', ...props);

get('stopwatch').appendChild(div({'style.backgroundColor':'black'},
                                h1('.test',
                                    h1('#test')),
                                p('testing ', span('.test', 'test '), 'testing'),
                                p('Paragraph ', a('google.co.uk', 'testing'), ' test number 2'),
                                h1('.test2', {'style.backgroundColor':'orange'})
                              )
                            );


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

let hasEquals = false;

calculator.appendChild(panel).className = 'calc__panel';

buttons.forEach(btn => {
  let txt = text(symbols[btn.id.slice(5)]);
  btn.appendChild(txt);
  calculator.appendChild(btn);
  btn.addEventListener('click', buttonPress);
});

function buttonPress(e) {
    let op = e.target.innerHTML;

    if (/^[0-9]+$/.test(op)) { addNumber(op); return; }
    if (op === 'C') { clear(); return; }
    if (op === '=') { equals(); return; }
    if (op === '(') { bracket(); return; }
    oper(op); return;
}

function clear() {
  panel.innerHTML = '';
}
function equals() {
  if (/^[0-9]+$/.test(panel.innerHTML.slice(-1)) ||
      panel.innerHTML.slice(-1) === ')') {
    panel.innerHTML = panel.innerHTML.replace('x', '*').replace('÷', '/');
    panel.innerHTML = eval(panel.innerHTML);
    hasEquals = true;
  }
}

function bracket() {
  const lastChar = panel.innerHTML.slice(-1);
  const isLastNum = /^[0-9]+$/.test(lastChar);
  if (!isLastNum && lastChar !== '(' ) {
    panel.innerHTML += '(';
  }
}
function addNumber(op) {
  if (!hasEquals) {
    panel.innerHTML += op;
    return;
  }
  panel.innerHTML = op;
  hasEquals = false;
}
function oper(op) {
  if (/^[0-9]+$/.test(op) || // button is a number
      /^[0-9]+$/.test(panel.innerHTML.slice(-1)) ||
      panel.innerHTML.slice(-1)=== ')') {
    panel.innerHTML += op;
    hasEquals = hasEquals ? !hasEquals : hasEquals;
  }
}

calculator.appendChild(create('div')).className = 'clear'; // add clear to calc
remove(get('noJS')); // remove no JS warning.
})();
