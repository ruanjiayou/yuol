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
function getByClass(oParent,sClass){	//�����һ����ǩ�ж���������
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
   var tablist=$(".tablist");//��ȡѡ����Ԫ��
   var tab_a =$(".tablist h2 span a");//��ȡ������ѡ��Ԫ��
   var tab_div =$(".tab_div");//��ȡ����ѡ��Ԫ��
	//������Ѷ
	tab('#xwzx_l');
	//ѧϰ����
	tab('#xxzl_l');
	//ͼ˵����
	tab('#tssh_l');
	//У԰����
	tab('#xyes_l');
		   });