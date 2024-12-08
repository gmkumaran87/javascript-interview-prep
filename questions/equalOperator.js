/**
 *  Modify x value such that the below IF condition satisfies
 *
 *  HINT : Use object for the x value.
 */

let x;

if (x == 1 && x == 2 && x == 3) {
	console.log('IF condition satisfies');
}

/**
 *  Answer and Explanation
 *
 *  When using Loose Equality operator in javascript like above to compare
 *  Non-primitive and Primitive datatype, JS converts Non-primitive datatype to string
 *  using .toString() method
 *  So we can override this method .toString() with our custom .toString() in the object and
 *  makes to increment the value by 1.
 */
x = {
	value: 1,
	toString: function () {
		return this.value++;
	},
};
