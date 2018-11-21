/*! anovsiradj (Mayendra Costanov) <anov.siradj22@gmail.com> */
/*
	pre-links custom element
	convert each line on <pre> that match URL-like to <a>

	@versions 20180918
	@dependencies
	https://github.com/WebReflection/document-register-element
	@references
	https://www.html5rocks.com/en/tutorials/webcomponents/customelements/
*/

(function() {
	'use strict';
	var pk = 'CustomPreLinksElement';
	var newline = '\n';
	function validate(text) {
		if(/\<|\>/.test(text)) return false; // ignore tags
		if(text[0] === '/' || text.indexOf('http') === 0) return true;
		return false;
	}
	function link(text) {
		var href = text.replace(/\"/g,'&#34;');
		return `<a href="${href}">${text}</a>`;
	}
	function init(element) {
		var lines = element.innerHTML.split(newline), i, n;
		for (i = 0; i < lines.length; i++) {
			lines[i] = validate(lines[i]) ? link(lines[i]) : lines[i];
		}
		element.innerHTML = lines.join(newline);
	}
	window[pk] = document.registerElement('pre-links', {
		extends: 'pre',
		prototype: Object.create(
			HTMLPreElement.prototype, {
				// createdCallback: {value: function() { /*console.log(1,arguments,this);*/ }},
				attachedCallback: {value: function() { init(this); }},
				//detachedCallback: {value: function() { /*console.log(3,arguments,this);*/ }},
				// attributeChangedCallback: {value: function() { console.log(4,arguments,this); }},
			},
		),
	});
	window[pk].prototype.PreLinksInit = function() { init(this); };
})();
