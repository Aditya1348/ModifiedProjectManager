var uid = (function() { let id = Math.floor((Math.random() * 10000 + 10000)); return function() { if (arguments[0] === 0) id = 0; return (id++).toString(); } })();

module.exports = uid;