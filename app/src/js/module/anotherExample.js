var anotherExample = (function (doc, win) {

    function method() {
        console.log('this module does\'t require jQuery');
    }

    return{
        method: method
    }

})(document, window);

module.exports = anotherExample;
