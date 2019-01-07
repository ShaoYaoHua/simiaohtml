
$(function(){
    var min_h = $(window).height() - 312;
	$('.mui-control-content').css({'min-height':min_h+'px'});

	var progress_num=$('.progress_num span').text();
	if(progress_num<=50){
		var hudu=progress_num*3.6-135;
		$('.rightcircle').css({'transform':'rotate('+hudu+'deg)'});
	}else{
		var hudu=progress_num*1.8-135;
		$('.rightcircle').css({'transform':'rotate(45deg)'});
		$('.leftcircle').css({'transform':'rotate('+hudu+'deg)'});
	}
	
	var progress_percentage=$('.percentage span').text();
	$('.goal .progress-bar').css({'width':progress_percentage+'%'});
	
	$('.pay_form .check').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
})

