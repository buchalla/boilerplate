var $ = require("jQuery");

var example = (function(win, doc, $){

	function go(){
		console.log("it's just a example", $);
	}

	return {
		go:go
	};
})(window, document, $);

module.exports = example;
