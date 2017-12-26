
$(function(){
	
	//�����ṹ����
	var box = '.slider';

	//��ʼ����ֵ
	var index = 0;

	//��ʱ��
	var myTimer;

	//�ƶ��ķ��� Ĭ��Ϊһ��ͼƬ�Ŀ��
	var W = $(box).find('ul li img').width();

	//�Զ��ֲ�ʱ��
	var time = 5000;

	//ͼƬ�ƶ���ʱ��
	var mTime = 400;

	//�Զ�����
	var autoPlay = function(){

		index += 1;

		if(index > $('.show ul li',box).length - 1){
			index = 0;
		};

		//�趨��ǰ���������е���ʽ
		$('.icon_num li',box).eq(index).addClass('current').siblings().removeClass('current');
		
		//�Զ���Ч���ı� ul �� left ֵ
		if(!$('.show ul',box).is(':animated')){
			$('.show ul',box).animate({left: '-' + W*index},mTime);
		};

		//�趨��ʱ��
		myTimer = setTimeout(autoPlay, time);
	};
	
	//�������ʱ��
	$('.icon_num li',box).mouseenter(function(){

		//�����ʱ��
		clearTimeout(myTimer);

		//ֹͣ�����жӵĶ���
		$('.show ul',box).stop();

		//�趨��ǰ���������е���ʽ
		$(this).addClass('current').siblings().removeClass('current');

		//�Զ���Ч���ı� ul �� left ֵ
		if(!$('.show ul',box).is(':animated')){
			$('.show ul',box).animate({left: '-' + W*$(this).index()},mTime);
		};
	})
	
	//������Ƴ���ʱ��
	$('.icon_num li',box).mouseleave(function(){
		// �� index ��Ϊ ��ǰ������ֵ
		index = $(this).index()-1;

		//ִ���Զ�����
		autoPlay();
	});

	//�ĵ����ؼ����� �Զ�����
	autoPlay();
})