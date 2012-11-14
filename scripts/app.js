goog.provide('tasks.App');
goog.require('tasks.Tasks');
goog.require('goog.dom');
/** @constructor */
tasks.App = function(){
		var main = goog.dom.getElement('main');
		var ts = new tasks.Tasks();
		ts.render(main);
};
new tasks.App();
