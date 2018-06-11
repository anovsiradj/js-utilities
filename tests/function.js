var fn = require('../function.js');
var tests = [
	-1,
	0,1,
	0o777,
	NaN,
	Infinity,
	undefined,
	null,
	'',' ','x','y',
	[],
	{}
];
for (var i = 0; i < tests.length; i++) {
	console.log(tests[i], fn.fn_empty(tests[i]));
}
