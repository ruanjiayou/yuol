
$(function(){
	
	//最外层结构名称
	var box = '.slider';

	//初始索引值
	var index = 0;

	//定时器
	var myTimer;

	//移动的幅度 默认为一个图片的宽度
	var W = $(box).find('ul li img').width();

	//自动轮播时间
	var time = 5000;

	//图片移动的时间
	var mTime = 400;

	//自动播放
	var autoPlay = function(){

		index += 1;

		if(index > $('.show ul li',box).length - 1){
			index = 0;
		};

		//设定当前的数字序列的样式
		$('.icon_num li',box).eq(index).addClass('current').siblings().removeClass('current');
		
		//以动画效果改变 ul 的 left 值
		if(!$('.show ul',box).is(':animated')){
			$('.show ul',box).animate({left: '-' + W*index},mTime);
		};

		//设定定时器
		myTimer = setTimeout(autoPlay, time);
	};
	
	//鼠标进入的时候
	$('.icon_num li',box).mouseenter(function(){

		//清除定时器
		clearTimeout(myTimer);

		//停止正在列队的动画
		$('.show ul',box).stop();

		//设定当前的数字序列的样式
		$(this).addClass('current').siblings().removeClass('current');

		//以动画效果改变 ul 的 left 值
		if(!$('.show ul',box).is(':animated')){
			$('.show ul',box).animate({left: '-' + W*$(this).index()},mTime);
		};
	})
	
	//当鼠标移除的时候
	$('.icon_num li',box).mouseleave(function(){
		// 将 index 改为 当前的索引值
		index = $(this).index()-1;

		//执行自动播放
		autoPlay();
	});

	//文档加载即运行 自动播放
	autoPlay();
})