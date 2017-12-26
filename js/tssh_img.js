window.onload = function(){
    var maxbottom=0;
    var aDiv=document.getElementById('pic');
    var aBottom=document.getElementById('bottom');
	var aLi = aDiv.getElementsByTagName('li');
	var aImg=aDiv.getElementsByTagName('img');
	var aHeight = {L:[],C:[],R:[],U:[]};
	
	// ���� getByClass������������ȡ��ǩ
   function getByClass(op,oClass){
		var otags = op.getElementsByTagName('img');
		var aRes = [];
		for(var i=0;i<otags.length;i++){
			var aClass = otags[i].className.split(' ');
			for(var j=0;j<aClass.length;j++){
				if(aClass[j]==oClass)
					aRes.push(otags[i]);
				break;
			};
		};
		return aRes;
   }
   // ��ȡ������������ pic_img �� img ��ǩ
	var imgPics = getByClass(aDiv,'pic_img');
	// �������ȡ������img��ǩ���а���������
	for(var i=0;i<imgPics.length;i++){
		// ��׼���
		var stdWidth = 232;
		// ��ʵ���
		var realWidth = imgPics[i].offsetWidth;
		if(realWidth!=stdWidth)
		{
			// ����
			var radio = imgPics[i].offsetWidth/imgPics[i].offsetHeight;
			// ���а���������
			imgPics[i].style.width = stdWidth+'px';
			imgPics[i].style.height = (stdWidth*radio).toFixed(0)+'px';
		}
	};	

	for(var i=0;i<aLi.length;i++){
		var iNow = i%4;
		
		switch(iNow){
			case 0:
				aLi[i].style.left = '0px';
				aHeight.L.push(aLi[i].offsetHeight);
				
				var step = Math.floor(i/4);
				
				if(!step){
					aLi[i].style.top = 0;
				}
				else{
					var sum = 0;
					for(var j=0;j<step;j++){
						sum += aHeight.L[j] + 5;
					}
					aLi[i].style.top = sum + 'px';
				}
					
					if(maxbottom<(sum+aLi[i].offsetHeight)){
					  maxbottom=(sum+aLi[i].offsetHeight);
					}
			break;
			case 1:
				aLi[i].style.left = '250px';
				aHeight.C.push(aLi[i].offsetHeight);
				
				var step = Math.floor(i/4);
				
				if(!step){
					aLi[i].style.top = 0;
				}
				else{
					var sum = 0;
					for(var j=0;j<step;j++){
						sum += aHeight.C[j] + 5;
					}
					aLi[i].style.top = sum + 'px';
				}
					
					if(maxbottom<(sum+aLi[i].offsetHeight)){
					  maxbottom=(sum+aLi[i].offsetHeight);
					}
			break;
			case 2:
				aLi[i].style.left = '500px';
				aHeight.R.push(aLi[i].offsetHeight);
				
				var step = Math.floor(i/4);
				
				if(!step){
					aLi[i].style.top = 0;
				}
				else{
					var sum = 0;
					for(var j=0;j<step;j++){
						sum += aHeight.R[j] + 5;
					}
					aLi[i].style.top = sum + 'px';
				}
					
					if(maxbottom<(sum+aLi[i].offsetHeight)){
					  maxbottom=(sum+aLi[i].offsetHeight);
					}
			break;
			case 3:
				aLi[i].style.left = '750px';
				aHeight.U.push(aLi[i].offsetHeight);
				
				var step = Math.floor(i/4);
				
				if(!step){
					aLi[i].style.top = 0;
				}
				else{
					var sum = 0;
					for(var j=0;j<step;j++){
						sum += aHeight.U[j] + 5;
					}
					aLi[i].style.top = sum + 'px';
					}
					
					if(maxbottom<(sum+aLi[i].offsetHeight)){
					  maxbottom=(sum+aLi[i].offsetHeight);
					}
			break;
		}
	}
   aBottom.style.top=(maxbottom+10)+'px';

};
