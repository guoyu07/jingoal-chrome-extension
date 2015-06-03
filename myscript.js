//document.body.bgColor='black';

var jqq = jQuery.noConflict();

window.setInterval(function(){
	//任务列表页
		jqq("#taskListTable .taskMgtAtt").each(function(idx, el){
			
			var taskId = jqq(this).attr("rel");
			console.log(taskId);
			
			var taskIDBlockName = 'task-id-block' + taskId;
			$taskIDTd = jqq(jqq(jqq("#taskListTable tr")[idx]).find('td > div')[0]);
			//console.log(jqq("#"+taskIDBlockName));
			if(jqq("#"+taskIDBlockName).length < 1) {
				//console.log(idx);
				//console.log(jqq(jqq("#taskListTable tr")[idx]).find('td')[0]);
				$taskIDTd.prepend("<span id='"+taskIDBlockName+"'>[id#"+taskId+"]</span>");
			}
		});
		
		//任务详情页
		if(jqq("#taskAllPerson").length >0 ){
			var taskId = jqq(".taskMgtAtt").attr("rel");
			
			var taskIDBlockName = 'task-id-title-block' + taskId;
			var $taskIDTd = jqq(jqq(".taskMgtAtt").prev());
			
			if(jqq("#"+taskIDBlockName).length < 1) {
				$taskIDTd.prepend("<span id='"+taskIDBlockName+"'>[id#"+taskId+"]</span>");
			}
		}
}, 1000);
