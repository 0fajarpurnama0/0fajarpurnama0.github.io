---
layout: post
title: To Do List
category: misc
---

<style>
	.job {
	  color: white;
	  background: #996D6D;
	  text-shadow: #474747 3px 5px 2px;
	}
</style>

<label for="status_show">show status: </label>
<select id="status_show">
  <option value="all">all</option>
  <option value="queued">queued</option>
  <option value="started">started</option>
  <option value="finished">finished</option>
</select>
<a href="http://raboninco.com/22989623/todolist-json-get-source">source code</a>

<div id="todolist"></div>

<script>
	$(document).ready(function(){
	  todolist();
	}).change(function(){
	  todolist();
	});

	function todolist(){
	  $('#todolist').html('');
	  var status_show = $('#status_show').val();
	  $.getJSON('https://0fajarpurnama0.github.io/assets/json/todolist.json', function(data) {
	   var todolist_length = data.todolist.length - 1;
		for(i = todolist_length; i >= 0; i--){
		  if(data.todolist[i].enddate){
			var status = "finished";
			var status_color = "white";
			var status_color_background = "green";
		  } else if(data.todolist[i].startdate){
			var status = "started";
			var status_color = "black";
			var status_color_background = "yellow";
		  }  else {
			var status = "queued";
			var status_color = "white";
			var status_color_background = "red";
		  }
		  var status_text = "<span style='color: "+status_color+"; background-color: "+status_color_background+";'>"+status+"</span>";
		  switch(status_show){
			case "all":
			  print("todolist", data.todolist[i].job, data.todolist[i].category, data.todolist[i].queuedate, data.todolist[i].startdate, data.todolist[i].enddate, status_text);
			  break;
			case status:
			  print("todolist", data.todolist[i].job, data.todolist[i].category, data.todolist[i].queuedate, data.todolist[i].startdate, data.todolist[i].enddate, status_text);
			  break;
			default:
		  }
		  
		}
	  });
	}

	function print(id, job, category, queuedate, startdate, enddate, status_text){
	  $('#'+id).append(`
		  <ul>
			<li class="job">Job: `+job+`</li>
			<li>Category: `+category+`</li>
			<li>Queuedate: `+queuedate+`</li>
			<li>Startdate: `+startdate+`</li>
			<li>Enddate: `+enddate+`</li>
			<li>Status: `+status_text+`</li>
		  </ul>
	  `);
	}
</script>