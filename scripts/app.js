goog.provide('tasks.App');
goog.require('tasks.Tasks');
/** @constructor */
tasks.App = function(){
		alert('hoge');
		var ts = new tasks.Tasks();
		ts.render(document.body);
};
new tasks.App();
