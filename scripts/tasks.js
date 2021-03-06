goog.provide('tasks.Tasks');
goog.require('goog.ui.Component');
goog.require('goog.soy');
goog.require('tasks.tasks_template');
goog.require('tasks.Task');
/** @constructor */
tasks.Tasks = function(){
		goog.base(this);
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
						'click', function(e){console.log(e)});
};
tasks.Tasks.prototype.createTask = function(task){
		var dh = this.getDomHelper();
		var task = new tasks.Task();
		task.title = 'これこれ';
		this.addChild(task);
		var tb = dh.getElementsByTagNameAndClass("tbody",null,this.table);
		task.createDom();
		dh.appendChild(tb[0], task.getElement());
};
