var omap = require('../omap.js');

var family = {
	parents: {
		father: {name: 'dad'},
		mother: {name: 'mom'}
	},
	childs: {}
};

omap(family.childs, {
	john: {
		childs: {
			buddy: {
				childs: {}
			}
		}
	}
});

console.log(family);
// console.log(JSON.stringify(family));
