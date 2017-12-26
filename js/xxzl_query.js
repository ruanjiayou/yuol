/*
	功能跟JQuery类似
*/


//只用于 $函数获取对象的绑定
function AddEvent(obj, sEv, fn){
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+sEv, function (){
			if(false==fn.call(obj))
			{
				event.cancelBubble=true;
				return false;
			}
		});
	}
	else
	{
		obj.addEventListener(sEv, function (ev){
			if(false==fn.call(obj))
			{
				ev.cancelBubble=true;
				ev.preventDefault();
			}
		}, false);
	}
}
function $(obj1,obj2){
	if(arguments.length==1)
		return new query(obj1);
	else
		return new query(obj1,obj2);
}

//获取标签中有指定类名的html标签 若标签中有多个类 也无妨
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

//获取obj元素对象的样式
function getStyle(obj,attr){
	if(obj.currentStyle)
		return obj.currentStyle[attr];
	else
		return getComputedStyle(obj,false)[attr];
}
function query(obj1,obj2){
    var vArg = arguments;
	this.elems = [];
	var oc = this.elems;
	switch(typeof obj1){
		case 'function':
			AddEvent(window,'load',obj1);
			break;
		case 'string':
			switch(obj1.charAt(0)){
				case '#':   // ID
					var obj = document.getElementById(obj1.substring(1));
					oc.push(obj);
					break;
				case '.':	// class
					oc = getByClass(document,obj1.substring(1));
					break;
				default:	// tagName
					var otags = document.getElementsByTagName(obj1);
					for(var i=0;i<otags.length;i++){
						oc.push(otags[i]);
					};
					break;
			};
			break;
		case 'object':
			switch(vArg.length){
				case 1:
					oc.push(obj1);
					break;
				case 2:		//两个参数
					switch(obj2.charAt(0)){
						case '.':    // class
							oc = getByClass(obj2.substring(1));
							break;
						default:	 // tagName
							var otags = obj1.getElementsByTagName(obj2);
							for(var i=0;i<otags.length;i++){
								oc.push(otags[i]);
							};
							break;
					};
					break;
				default:break;
			};
			break;
		default:break;
	};
	this.elems = oc;
}

//运动框架
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(
		function(){
			var bStop=true;//这一次运动就结束了——所有的值都到达了
			for(var attr='' in json){
				//1.取当前的值
				var iCur=0;
				if(attr=='opacity')
					iCur = parseInt(parseFloat(getStyle(obj, attr))*100);
				else
					iCur=parseInt(getStyle(obj, attr));
			//2.算速度
			var iSpeed=(json[attr]-iCur)/8;
			iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
			//3.停止检测
			if(iCur!=json[attr])
				bStop=false;
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opacity:'+(iCur+iSpeed)+')';
				obj.style.opacity=(iCur+iSpeed)/100;
			}
			else
				obj.style[attr]=iCur+iSpeed+'px';
		};
			if(bStop)
			{
				clearInterval(obj.timer);
				if(fn)
					fn();
			}
		},30);
}
query.prototype.click = function(fn){
	var oc = this.elems;
	for(var i=0;i<oc.length;i++){
	AddEvent(oc[i],'click',fn);
	};
	return this;
}
query.prototype.hover=function (fnOver, fnOut){
	for(var i=0;i<this.elems.length;i++)
	{
		AddEvent(this.elems[i], 'mouseover', fnOver);
		AddEvent(this.elems[i], 'mouseout', fnOut);
	};
	return this;
};
query.prototype.css=function(attr, value){
	if(arguments.length==2)	//设置样式
	{
		for(var i=0;i<this.elems.length;i++)
			this.elems[i].style[attr]=value;
	}
	else	//获取样式
	{
		if(typeof attr=='string')
			return getStyle(this.elems[0], attr);
		else
		{
			for(var i=0;i<this.elems.length;i++)
			{
				for(var k='' in attr)
					this.elems[i].style[k]=attr[k];
			};
		}
	}
	return this;
};
query.prototype.attr=function(attr, value){
	if(arguments.length==2)
	{
		for(var i=0;i<this.elems.length;i++)
			this.elems[i][attr]=value;
	}
	else
	{
		if(typeof attr =='string')
			return this.elems[0][attr];
		else
			for(var i=0;i<this.elems.length;i++){
				for(var k='' in attr)
					this.elems[i][k]=attr[k];
			};
	}
	return this;
};
query.prototype.extend=function(name,fn){
	query.prototype[name]=fn;
}
$().extend('sports',function(json){
	for(var i=0;i<this.elems.length;i++)
		startMove(this.elems[i], json);
})









