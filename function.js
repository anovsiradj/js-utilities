/*
name format: fn_*()
*/

module.exports = {
	fn_noop: function() {},

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
	fn_empty: function(data) {
		if (typeof data === 'undefined' || data === null) return true;

		if (typeof data === 'string' && data.trim() === '') return true;

		if (typeof data === 'number' && Number.isNaN(data) === true) return true;

		// https://stackoverflow.com/a/32108184/3036312
		if (typeof data === 'object' && data.constructor === Object && Object.keys(data).length === 0) return true;

		if (Array.isArray(data) && data.length === 0) return true;

		return false;
	}
};
