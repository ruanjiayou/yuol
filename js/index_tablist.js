function tab(id){
	var obj =$(id)[0];
	var odivs = getByClass(obj,'tab_div');
	var obj = obj.getElementsByTagName('h2')[0];
	var olinks = obj.getElementsByTagName('a');
	for(var i=1;i<odivs.length;i++){
		odivs[i].style.display = 'none';
	};
	for(var i=0;i<olinks.length-1;i++){
		olinks[i].index = i;
		olinks[i].onmouseover = function(){
			var op=this;
			for(var j=0;j<odivs.length;j++){
				odivs[j].style.display = 'none';
			};
			odivs[op.index].style.display = 'block';
		}
	};
}
function getByClass(oParent,sClass){	//解决了一个标签有多个类的问题
	var tags = oParent.getElementsByTagName('*');
	var aResult=[];
	for(var i=0;i<tags.length;i++){
		var classArr = tags[i].className.split(' ');
		for(var j=0;j<classArr.length;j++){
			if(classArr[j]==sClass){
				aResult.push(tags[i]);
				break;
			};
		};
	};
	return aResult;
}
$(function(){
   var tablist=$(".tablist");//获取选项卡框架元素
   var tab_a =$(".tablist h2 span a");//获取标题栏选项元素
   var tab_div =$(".tab_div");//获取内容选项元素
	//新闻资讯
	tab('#xwzx_l');
	//学习资料
	tab('#xxzl_l');
	//图说生活
	tab('#tssh_l');
	//校园二手
	tab('#xyes_l');
		   });