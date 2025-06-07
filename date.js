const dateFormatterm = require('platzidate');

console.log('Timestamp:', dateFormatterm.getTimestamp());
console.log('Fecha en español:', dateFormatterm.getLongTime())
console.log('Fecha en inglés:', dateFormatterm.getLongTime('en-US'));