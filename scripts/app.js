goog.provide('tasks.App');
goog.require('tasks.Tasks');
goog.require('goog.dom');
/** @constructor */
tasks.App = function(){
		alert('hoge');
		var ts = new tasks.Tasks();
		ts.render();
};
new tasks.App();
