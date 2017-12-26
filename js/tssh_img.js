window.onload = function(){
    var maxbottom=0;
    var aDiv=document.getElementById('pic');
    var aBottom=document.getElementById('bottom');
	var aLi = aDiv.getElementsByTagName('li');
	var aImg=aDiv.getElementsByTagName('img');
	var aHeight = {L:[],C:[],R:[],U:[]};
	
	// 函数 getByClass：根据类名获取标签
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
   // 获取所有类名中有 pic_img 的 img 标签
	var imgPics = getByClass(aDiv,'pic_img');
	// 对上面获取的所有img标签进行按比例缩放
	for(var i=0;i<imgPics.length;i++){
		// 标准宽度
		var stdWidth = 232;
		// 真实宽度
		var realWidth = imgPics[i].offsetWidth;
		if(realWidth!=stdWidth)
		{
			// 比例
			var radio = imgPics[i].offsetWidth/imgPics[i].offsetHeight;
			// 进行按比例缩放
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
