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
