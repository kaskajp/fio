var app,Application=function(){var t,a};Application.prototype.init=function(){var t=this;app=this,$.get("index.php?get_data=1",function(a){t.app_data=a,t.onReady()},"json")},Application.prototype.get_data=function(t){var a,p=app.get_object_data_from_id(t)},Application.prototype.onReady=function(){app.populate()},Application.prototype.populate=function(){$.each(app.app_data,function(t,a){"home"!=t&&""!=t&&$.each(a,function(t,a){var p="<tr>";p+='<td><a href="'+a.url+'">',p+='<span class="title">'+a.name+'<span class="description">'+a.description+"</span></span>",p+='<span class="category">'+a.category+"</span>",p+='<span class="url">'+a.url+"</span>",p+="</a></td></tr>",$("#contenttable").append(p)})}),$("#contenttable").filterTable({label:"",inputType:"text",placeholder:"filter dat database"}),$("#fio-scene .filter-table input")[0].focus()};