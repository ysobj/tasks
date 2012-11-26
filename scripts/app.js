goog.provide('tasks.App');
goog.require('tasks.Tasks');
goog.require('goog.dom');
goog.require('goog.events.EventHandler');
/** @constructor */
tasks.App = function(){
		var main = goog.dom.getElement('main');
		var ts = new tasks.Tasks();
		ts.render(main);
		var btn = goog.dom.getElement('btn_new');
		var eh_ = new goog.events.EventHandler();
		eh_.listen(
						btn,
						goog.events.EventType.CLICK,
						function(){
								var task = {
										"title":"ほげほげ"
								};
								var obj = {
										"task" : task
								};
								ts.createTask(obj)
						}
			);
};
new tasks.App();
