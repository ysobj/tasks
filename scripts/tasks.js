goog.provide('tasks.Tasks');
goog.require('goog.ui.Component');
goog.require('goog.soy');
goog.require('tasks.tasks_template');
/** @constructor */
tasks.Tasks = function(){
		goog.base(this);
		this.tasks = [];
};
goog.inherits(tasks.Tasks,goog.ui.Component);

tasks.Tasks.prototype.createDom = function(){
		var dh = this.getDomHelper();
		var el = dh.createDom('div',null,null);
		el.appendChild(goog.soy.renderAsElement(tasks.tasks_template.base));
		this.setElementInternal(el);
};
tasks.Tasks.prototype.enterDocument = function(){
		goog.base(this,'enterDocument');
		this.getHandler().listen(this.getElement(),
						'click', function(){alert('hoge');});
};
tasks.Tasks.prototype.createTask = function(task){
	alert('task add');	
};
