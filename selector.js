function looper(elements, callback) {
	if (callback && typeof callback === 'function') {
		for (var i = 0; i < elements.length; i++) {
			callback(elements[i]);
		}
	}
}

function tagname(id, dox, callback) {
	var elements = (dox || document).getElementsByTagName(id);
	looper(elements, callback);
	return elements;
}

module.exports = {
	by_id: function(id, callback) {
		var element = document.getElementById(id);
		if (element && callback) callback(element);
		return element;
	},
	by_tag: tagname,
	by_name: tagname,
	by_tagname: tagname,
	by_class: function(cls, dox, callback) {
		var elements = (dox || document).getElementsByClassName(cls);
		looper(elements, callback);
		return elements;
	},
	by_query: function(q, dox, callback) {
		var element = (dox || document).querySelector(q);
		if (element && callback) callback(element);
		return element;
	},
	by_query_all: function(q, dox, callback) {
		var elements = (dox || document).querySelectorAll(q);
		looper(elements, callback);
		return elements;
	}
}
