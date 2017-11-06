var omap = require('./omap');

exports.element_create = function(tag, props, callback) {
	var element = document.createElement(tag);
	if (typeof props === 'object') omap(element, props);
	if (typeof callback === 'function') callback(element);
	return element;
};

exports.element_prop = function(element, prop_or_props, content) {
	if (typeof prop_or_props === 'string') {
		if (typeof content === 'undefined') {
			return element[prop_or_props];
		} else {
			if (typeof content === 'function') return content(element[prop_or_props]);
			element[prop_or_props] = content;
		}
	}

	if (typeof prop_or_props === 'object') {
		omap(element, prop_or_props);
	}

	return null;
}

exports.element_attr = function(element, attr_or_attrs, content) {
	if (typeof attr_or_attrs === 'string') {
		if (typeof content === 'undefined') {
			return element.getAttribute(attr_or_attrs);
		} else {
			if (typeof content === 'function') return content(element.getAttribute(attr_or_attrs));
			element.setAttribute(attr_or_attrs, content);
		}
	}

	if (typeof attr_or_attrs === 'object') {
		for (var a in attr_or_attrs) {
			element.setAttribute(a, attr_or_attrs[a]);
		}
	}

	return null;
}
