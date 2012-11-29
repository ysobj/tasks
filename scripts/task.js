goog.provide('tasks.Task');
goog.require('goog.ui.Component');
goog.require('goog.soy');
goog.require('tasks.tasks_template');
/** @constructor */
tasks.Task = function(){
		goog.base(this);
};
goog.inherits(tasks.Task,goog.ui.Component);

tasks.Task.prototype.createDom = function(){
		var dh = this.getDomHelper();
		var param = {};
		param.task = this;
		var obj = goog.soy.renderAsElement(tasks.tasks_template.task, param);
		var tr = dh.getElementsByTagNameAndClass("tr",null,obj);
		this.setElementInternal(tr[0]);
};
tasks.Task.prototype.enterDocument = function(){
		goog.base(this,'enterDocument');
};
