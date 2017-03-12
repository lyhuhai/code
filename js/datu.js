
$(document).ready(function(){
		var len=$(".tu>li").length;
		var i=0;
		var lunhuan;
		var kuan=$(window).width();
		$(".tu>li").css('width',kuan);
		$(".xu:eq(0)").addClass('on');

		function huan()
		{	
			$(".xu:eq("+i+")").addClass('on');
			$(".xu:eq("+i+")").siblings().removeClass('on');
			$(".tu>li:eq("+i+")").siblings("li").fadeOut(500);
			$(".tu>li:eq("+i+")").fadeIn(1500);
			i=i+1
			if(i==len)
			{i=0}
		
		}
		lunhuan=setInterval(huan,5000);
		$("#hao").find(".xu").click(function(){
			j=$(this).index();
			$(".xu:eq("+j+")").addClass('on');
			$(".xu:eq("+j+")").siblings().removeClass('on');
			i=j;
			$(".tu>li:eq("+j+")").siblings("li").fadeOut(500);
			$(".tu>li:eq("+j+")").fadeIn(3000);
											  
		});
		
	});