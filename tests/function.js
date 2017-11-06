var fn = require('../function.js');
var tests = [
	0,1,
	null,'',' ','x','y',
	NaN,Infinity,
	[],
	{}
];
for (var i = 0; i < tests.length; i++) {
	console.log(tests[i], fn.fn_empty(tests[i]));
}
