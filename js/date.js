function showTime(){                                
    var today = new Date();
    var weekday=new Array(7)
    weekday[0]="����һ"
    weekday[1]="���ڶ�"
    weekday[2]="������"
    weekday[3]="������"
    weekday[4]="������"
    weekday[5]="������"
    weekday[6]="������"                                       
    var y=today.getFullYear()+"��";
    var m=today.getMonth()+"��";
    var d=today.getDate()+"��";
    var w=weekday[today.getDay()];
	var date=y+m+d;
    }        
