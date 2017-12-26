function showTime(){                                
    var today = new Date();
    var weekday=new Array(7)
    weekday[0]="星期一"
    weekday[1]="星期二"
    weekday[2]="星期三"
    weekday[3]="星期四"
    weekday[4]="星期五"
    weekday[5]="星期六"
    weekday[6]="星期日"                                       
    var y=today.getFullYear()+"年";
    var m=today.getMonth()+"月";
    var d=today.getDate()+"日";
    var w=weekday[today.getDay()];
	var date=y+m+d;
    }        
