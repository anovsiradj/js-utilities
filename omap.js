function omap(target, data) {
	if (target && typeof data === 'object') {
		for(var d in data) {
			if (typeof data[d] === 'object') {
				if (typeof target[d] === 'undefined') target[d] = {};
				omap(target[d], data[d]);
			} else {
				target[d] = data[d];
			}
		}
	}
}

module.exports = omap;
