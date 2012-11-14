goog.provide('tasks.Tasks');
goog.require('goog.ui.Component');
goog.require('goog.soy');
goog.require('tasks.tasks_template');
/** @constructor */
tasks.Tasks = function(){
		goog.base(this);
};
goog.inherits(tasks.Tasks,goog.ui.Component);

tasks.Tasks.prototype.createDom = function(){
		var dh = this.getDomHelper();
		var el = dh.createDom('div',null,null);

		var tbl = dh.createTable(1,9);
		dh.setProperties(tbl, {class: 'table table-condensed table-bordered'});
		/*
		dh.append(tbl.rows[0].cells[0],'TEST');
		dh.append(tbl.rows[0].cells[1],'日付');
		dh.append(tbl.rows[0].cells[2],'Project');
		dh.append(tbl.rows[0].cells[3],'作業内容');
		dh.append(tbl.rows[0].cells[4],'見積りH');
		dh.append(tbl.rows[0].cells[5],'見積りM');
		dh.append(tbl.rows[0].cells[6],'実績');
		dh.append(tbl.rows[0].cells[7],'開始');
		dh.append(tbl.rows[0].cells[8],'終了');
		*/
		el.appendChild(goog.soy.renderAsElement(tasks.tasks_template.base));
		this.setElementInternal(el);
};
tasks.Tasks.prototype.enterDocument = function(){
		goog.base(this,'enterDocument');
		this.getHandler().listen(this.getElement(),
						'click', function(){alert('hoge');});
};
