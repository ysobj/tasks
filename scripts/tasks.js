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
		this.table = goog.soy.renderAsElement(tasks.tasks_template.base);
		el.appendChild(this.table);
		this.setElementInternal(el);
};
tasks.Tasks.prototype.enterDocument = function(){
		goog.base(this,'enterDocument');
		this.getHandler().listen(this.getElement(),
						'click', function(){alert('hoge');});
};
tasks.Tasks.prototype.createTask = function(task){
		var dh = this.getDomHelper();
		this.tasks.push(task);
		var tb = dh.getElementsByTagNameAndClass("tbody",null,this.table);
		var obj = goog.soy.renderAsElement(tasks.tasks_template.task, task);
		var tr = dh.getElementsByTagNameAndClass("tr",null,obj);
		dh.appendChild(tb[0], tr[0]);
};
