(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var anotherExample = (function (doc, win) {

    function method() {
        console.log('this module does\'t require jQuery');
    }

    return{
        method: method
    };

})(document, window);

module.exports = anotherExample;

},{}],2:[function(require,module,exports){
var anotherExample = require("./modules/anotherExample");
anotherExample.method();

console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
console.log('And here we have jQuery', $);
},{"./modules/anotherExample":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc3JjL2pzL21vZHVsZXMvYW5vdGhlckV4YW1wbGUuanMiLCJhcHAvc3JjL2pzL3Rlc3RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIGFub3RoZXJFeGFtcGxlID0gKGZ1bmN0aW9uIChkb2MsIHdpbikge1xuXG4gICAgZnVuY3Rpb24gbWV0aG9kKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcyBtb2R1bGUgZG9lc1xcJ3QgcmVxdWlyZSBqUXVlcnknKTtcbiAgICB9XG5cbiAgICByZXR1cm57XG4gICAgICAgIG1ldGhvZDogbWV0aG9kXG4gICAgfTtcblxufSkoZG9jdW1lbnQsIHdpbmRvdyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYW5vdGhlckV4YW1wbGU7XG4iLCJ2YXIgYW5vdGhlckV4YW1wbGUgPSByZXF1aXJlKFwiLi9tb2R1bGVzL2Fub3RoZXJFeGFtcGxlXCIpO1xuYW5vdGhlckV4YW1wbGUubWV0aG9kKCk7XG5cbmNvbnNvbGUubG9nKCdBbmQgaGVyZSB3ZSBoYXZlIGpRdWVyeScsICQpO1xuY29uc29sZS5sb2coJ0FuZCBoZXJlIHdlIGhhdmUgalF1ZXJ5JywgJCk7XG5jb25zb2xlLmxvZygnQW5kIGhlcmUgd2UgaGF2ZSBqUXVlcnknLCAkKTtcbmNvbnNvbGUubG9nKCdBbmQgaGVyZSB3ZSBoYXZlIGpRdWVyeScsICQpO1xuY29uc29sZS5sb2coJ0FuZCBoZXJlIHdlIGhhdmUgalF1ZXJ5JywgJCk7XG5jb25zb2xlLmxvZygnQW5kIGhlcmUgd2UgaGF2ZSBqUXVlcnknLCAkKTtcbmNvbnNvbGUubG9nKCdBbmQgaGVyZSB3ZSBoYXZlIGpRdWVyeScsICQpO1xuY29uc29sZS5sb2coJ0FuZCBoZXJlIHdlIGhhdmUgalF1ZXJ5JywgJCk7XG5jb25zb2xlLmxvZygnQW5kIGhlcmUgd2UgaGF2ZSBqUXVlcnknLCAkKTsiXX0=
