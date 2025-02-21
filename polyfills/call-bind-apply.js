Function.prototype.myCall = function (context, ...args) {
	let globalContext = context || globalThis;

	let randomSym = Symbol();

	globalContext[randomSym] = this;
	console.log('GLobal', { globalContext, context, sd: this });
	let result = globalContext[randomSym](args);

	delete globalContext[randomSym];

	return result;
};

Function.prototype.myBind = function (context, ...args) {
	if (typeof this !== 'function') {
		throw new TypeError('This is not a function');
	}

	const fn = this;

	return function (...newArgs) {
		return fn.apply(context, [...args, ...newArgs]);
	};
};
function myFunc() {
	console.log(`Hello I am inside func and ${this.name}`);
}

const obj = {
	name: 'Muthu',
};

myFunc.myCall(obj);
