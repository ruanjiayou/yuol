/* 
������������ query ���ʹ��
���������� query �е�
	getStyle()����
	getByClass()����
ѡ�����貹�� ��obj ������ɸѡ���� �磺div,p div,a.clear div.dd,a,p.cc ul>li div:first,p:odd ��
�貹��ĺ��� �� ���ɾ����
				���ɾ������
 */
 
 
 
//css����ʹ��˵��
// ��������������1��attr���ַ���ʱ ������Ϊ��ȡobj����ĵ�����ʽ ��2��attrΪjson ʱ������obj�Ķ����ʽ
// ������������������obj��attr����Ϊoval
function css(obj,attr,oval){
	//  ��ȡ��ʽ/���ö����ʽ
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
	//  ���õ�����ʽ
	else
	{
		obj.style[attr]=oval;
	}
}
//attr����ʹ��˵��
//��������������1��attr���ַ���ʱ ������Ϊ��ȡobj����ĵ������� ��2��attrΪjson ʱ������obj�Ķ������
//������������������obj��attr����Ϊoval
function attr(obj,attr,oval){
	// ��ȡ��������/���ö������
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
	//���õ�������
	else
		obj[attr]=oval;
}
//myadd����ʹ��˵��
//������ʽ�� Ԫ�ض��� �¼� ����
function myadd(obj,oevt,fn){
	if(obj.attachEvent)
		obj.attachEvent('on'+oevt,fn);
	else
		obj.addEventListener(oevt,fn,false);
}
//obj����ʹ��˵��
// ������������ʱ����һ���������Ѿ���ȡ�� Ԫ�ض���
//���ص���Ԫ�ض������Ԫ�ض��������
//����idʱ���ַ���ǰҪ�� # ����������ʱ���ַ���ǰҪ�� .
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
	var year = today.getFullYear()+'��';
	var months = (today.getMonth()+1)+'��';
	var days = today.getDate()+'��';
	var week = today.getDay();
	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();
	switch (week){
		case 0:week = '������';break;
		case 1:week = '����һ';break;
		case 2:week = '���ڶ�';break;
		case 3:week = '������';break;
		case 4:week = '������';break;
		case 5:week = '������';break;
		case 6:week = '������';break;
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