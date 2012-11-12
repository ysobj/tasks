goog.provide('tasks.Tasks');
goog.require('goog.ui.Component');
/** @constructor */
tasks.Tasks = function(){
		goog.base(this);
};
goog.inherits(tasks.Tasks,goog.ui.Component);

tasks.Tasks.prototype.createDom = function(){
		var dh = this.getDomHelper();
		this.setElementInternal(dh.createDom('div',null,'TASKS'));
};
tasks.Tasks.prototype.enterDocument = function(){
		goog.base(this,'enterDocument');
		this.getHandler().listen(this.getElement(),
						'click', function(){alert('hoge');});
};
