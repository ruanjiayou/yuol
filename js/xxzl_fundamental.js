/* 
本函数集合与 query 结合使用
本集合依赖 query 中的
	getStyle()函数
	getByClass()函数
选择器需补充 ：obj 函数无筛选功能 如：div,p div,a.clear div.dd,a,p.cc ul>li div:first,p:odd 等
需补充的函数 ： 添加删除类
				添加删除属性
 */
 
 
 
//css函数使用说明
// 传入两个参数：1、attr是字符串时 ，功能为获取obj对象的单个样式 ；2、attr为json 时，设置obj的多个样式
// 传入三个参数：设置obj的attr属性为oval
function css(obj,attr,oval){
	//  获取样式/设置多个样式
	if(arguments.length==2){
		if(typeof attr=='string')
		{
			if(obj.currentStyle)
				return obj.currentStyle[attr];
			else
				return getComputedStyle(obj,false)[attr];
		}
		else
		{
			for(var i='' in attr)
				obj.style[i]=attr[i];
		}
	}
	//  设置单个样式
	else
	{
		obj.style[attr]=oval;
	}
}
//attr函数使用说明
//传入两个参数：1、attr是字符串时 ，功能为获取obj对象的单个属性 ；2、attr为json 时，设置obj的多个属性
//传入三个参数：设置obj的attr属性为oval
function attr(obj,attr,oval){
	// 获取单个属性/设置多个属性
	if(arguments.length==2)
	{
		if(typeof attr=='string')
			return obj[attr];
		else
		{
			for(var i='' in attr)
				obj[i]=attr[i];
		}
	}
	//设置单个属性
	else
		obj[attr]=oval;
}
//myadd函数使用说明
//传参形式： 元素对象 事件 函数
function myadd(obj,oevt,fn){
	if(obj.attachEvent)
		obj.attachEvent('on'+oevt,fn);
	else
		obj.addEventListener(oevt,fn,false);
}
//obj函数使用说明
// 传入两个参数时，第一个必须是已经获取的 元素对象。
//返回的是元素对象或是元素对象的数组
//传入id时，字符串前要加 # ；传入类名时，字符串前要加 .
function obj(op,str){
	if(arguments.length==1)
	{
		switch(op.charAt(0)){
			case '#':
				return document.getElementById(op.substring(1));
				break;
			case '.':
				return getByclass(op.substring(1));
				break;
			default:
				var oc = [];
				var otags = document.getElementsByTagName(op);
				for(var i=0;i<otags.length;i++){
					oc.push(otags[i]);
				};
				return oc;
				break;
		};
	}
	else
	{
		switch(str.charAt(0)){
			case '.':
				return getByClass(op,str.substring(1));
				break;
			default:
				var oc=[];
				var otags = op.getElementsByTagName(str);
				for(var i=0;i<otags.length;i++){
					oc.push(otags[i]);
				};
				return oc;
				break;
		};
	}
}

function disTime(){
	var today = new Date();
	var year = today.getFullYear()+'年';
	var months = (today.getMonth()+1)+'月';
	var days = today.getDate()+'日';
	var week = today.getDay();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	switch (week){
		case 0:week = '星期天';break;
		case 1:week = '星期一';break;
		case 2:week = '星期二';break;
		case 3:week = '星期三';break;
		case 4:week = '星期四';break;
		case 5:week = '星期五';break;
		case 6:week = '星期六';break;
		}
	function fixTime(x){
		if(x<10)
			x='0'+x;
		return x;
		}
	minutes = fixTime(minutes);
	seconds = fixTime(seconds);
	var time = year+months+days+week;
	var otime = obj('#time');
	otime.innerHTML = time;
	setTimeout('disTime()',1000);
	//var time = {'year':year,'months':months,'day':days,'week':week,'hours':hours,
	//'minutes':minutes,'seconds':seconds}
	//return time;
	}