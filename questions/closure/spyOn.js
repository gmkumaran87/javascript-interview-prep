function spyOn(fn) {
	let count = 0;

	return function spy(...args) {
		count++;

		fn.apply(this, args);

		spy.timesInvoked = function () {
			console.log(count);
			return count;
		};
	};
}

const greetTwice = spyOn((name) => console.log(`Hi ${name}`));

greetTwice('david'); // hi david
greetTwice.timesInvoked(); // 1
greetTwice('tom'); // hi tom
greetTwice.timesInvoked(); // 2
greetTwice('john'); // hi John
greetTwice('jenne'); // hi jenne
greetTwice.timesInvoked(); // 4
console.log(greetTwice.timesInvoked());
