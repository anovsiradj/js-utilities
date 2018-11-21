/*! anovsiradj (Mayendra Costanov) <anov.siradj22@gmail.com> */
/*
	pre-hljs custom element
	add syntax-highlight to <pre> using highlight.js

	@versions 20181121
	@dependencies
	https://github.com/WebReflection/document-register-element
	@references
	https://www.html5rocks.com/en/tutorials/webcomponents/customelements/
	https://highlightjs.org/usage/
*/


(function () {
	function init(element) {
		if (element.dataset.lang) {
			element.classList.add(element.dataset.lang);
		}
		hljs.highlightBlock(element);
	}

	window.CustomPreHLJSElement = document.registerElement('pre-hljs', {
		extends: 'pre',
		prototype: Object.create(
			HTMLPreElement.prototype, {
				attachedCallback: { value: function() { init(this); } },
			}
		),
	});
})();
