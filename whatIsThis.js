/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
	// console.log('This is...', this);
	// console.log('a = ', a);
	// console.log('b = ', b);
};

this.whatIsThis= new WhatIsThis();
// var test =  WhatIsThis(a, b);
WhatIsThis(function(){


});

var inAnObject = {
	name: 'inAnObject',
	test1: whatIsThis,
	anotherObject: {
		name: 'anotherObject',
		test2: whatIsThis

	}
};

inAnObject.test1('face', 'book');
console.log(inAnObject.test1('face', 'book'));







var inAFunction = function(a, b) {
	this.name = 'Sally';
	whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
	name: 'trickyTricky',
	why: 'does this work?',
	what: 'is going on here?'
};

var confusing = {
	name: 'confusing',
	state: 'Alaska',
	city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

// Instructions:
// You are a scientist who has just discovered a *mysterious* new element
// in your lab. Since creativity isn't your strong suit, you name the element
// `this`. Your job is to figure out the properties of this new element as
// well as how it interacts with its environment. Run through each of the
// examples in whatIsThis.js, one by one (commenting out the previous example
// and uncomment the current example as necessary). In the comments section
// below each example fill in what `this` is referencing inside of the
// whatIsThis function. Why? If it throws an error, why is it throwing an
// error?

// You can open index.html in your browser and view your console to get
// started.

// * Problem 1
// whatIsThis('hello', 'world');
// * "this" is ... a string that outputs hello world
// * because ... whatIsThis is refering a function that represents a and b, and a and b console.log to be hello world




// // * Problem 2
// window.whatIsThis('hello', 'world');
// // * "this" is ... a window that contains a DOM document
// // * because ... in our console.log it provides us with information that can revert back to the html document. Providing us with the properties of the window.




// * Problem 3
// inAnObject.test1('face', 'book');
// // * "this" is ... a value inside the label for  inAnObject, variable defining that 'this' is  the test1 keys and the test1 key is equal to (a,b) as defined in the previous function.
// // * because ...
//
// console.log(inAnObject.test1('face', 'book'));


// };


// // * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
// // * "this" is ... still refering to the test1 key but inside the inAnObject label rather than the anotherObject label because inside anotherObject there is only test2. So test1 inside inAnObject we will find whatisThis it is still refering to (a,b), which is not the ('twitter','book') strings specifically.
// // * because ...
//
// console.log(inAnObject.anotherObject.test1('twitter', 'book'));
//
//
//






//
// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
// * "this" is ... now test2
// * because ... it is specifically calling test2 which lives in the anotherObject label, but previously whatIsthis is still defining (a,b) so test2 will still define (a,b) which is ('twitter', 'book') again
//



// * Problem 6
// whatIsThis.call();
// * "this" is ... a call method
// * because ... whatIsThis is the now not defined so it is refering to an object in the problem that we are going to call once something gets passed through the argument.
//
//
//

// * Problem 7
// whatIsThis.call(trickyTricky);
// * "this" is ... this is now calling on the object of trickeyTricky.
// * because ... now that we passed an argument in the call method, this is refering specifically to the objects in the variable if trickeyTricky.
//
//



// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
// * "this" is ... calling on the object variable trickeyTricky.
// * because ... we defined the the argument in the call method of trickyTricky but specifically assigning the object variable of whatIsThis to return 'nice', 'job',
//




// * Problem 9
// whatIsThis.call(confusing);
// * "this" is ...this is calling on the variable confusing.
// * because ... defined in the argument is confusing and confusing has keys or states of a name,city, and state.




// * Problem 10
// whatIsThis.call(confusing, 'hello');
// * "this" is ... calling on the variable of confusing with an added string.
// * because ... the call method has an argument of confusing being passed through which defines an object and we are also adding a string of 'hello' to be passed through to each one fo those arguments.
//


//
// * Problem 11
// whatIsThis.apply(trickyTricky);
// * "this" is ... applying the whatIsThis function to the trickeyTricky object.
// * because ... the apply method is calling on the argument of trickeyTricky and returning them as an array.


//
//
// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
// * "this" is ... being applied to the confusing variable object with added strings of 'nice' and 'job'.
// * because ... the confusing variable will return an array of its variables and add into that array an array of 'nice', and 'job'.
//
//
//

* Problem 13
whatIsThis.apply(confusing, 'nice', 'job');
* "this" is ...
* because ...




// * Problem 14
// inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...




// * Problem 15
// inAFunction.test3('A', 'B');
// * "this" is ...
// * because ...




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
// * "this" is ...
// * because ...




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
// * "this" is ...
// * because ...




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
// * "this" is ...
// * because ...




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
// * "this" is ...
// * because ...
