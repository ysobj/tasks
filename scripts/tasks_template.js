// This file was automatically generated from tasks_template.soy.
// Please don't edit this file by hand.

goog.provide('tasks.tasks_template');

goog.require('soy');
goog.require('soy.StringBuilder');


tasks.tasks_template.base = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="table table-condensed table-bordered"><tbody><tr><td>TEST</td><td>日付</td><td>Project</td><td>作業内容</td><td>見積りH</td><td>見積りM</td><td>実績</td><td>開始</td><td>終了</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};
