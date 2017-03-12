// JavaScript Document

        	/**顶部热门函数**/
			var oTopHot = document.getElementById('TopHot');
			var oBtn1 = oTopHot.getElementsByTagName('a')[0];
			var oSpan = oTopHot.getElementsByTagName('span')[0];
	
			oTopHot.onmousemove = function (){
		
			oBtn1.style.backgroundPosition = '-238px -21px';
			oSpan.style.display = 'block';
		
			}
	
			oTopHot.onmouseout = function (){
		
			oBtn1.style.backgroundPosition = '-238px 0';
			oSpan.style.display = 'none';
		
			}




	tabBox(".xl-menu-zx li",".xl-menu-zx_show");   //导航整形美容切换
                  //切换函数
					function tabBox(cla,hiddenCla,domEle,addCla)//公用式tabBox隐式菜单功能cla为元素集如：".classname li"
					{
						hiddenCla= (typeof(hiddenCla)=="undefined")? "":hiddenCla; 
						domEle= (typeof(domEle)=="undefined")? "li":domEle; 
						addCla= (typeof(addCla)=="undefined")? "select":addCla; 
						$(cla).each(function(index,dom){									
							$(dom).mouseover(function(){
								$(this)	.addClass(addCla).siblings(domEle).removeClass(addCla);	
								$(hiddenCla).eq(index).addClass("block").siblings(hiddenCla).removeClass("block");	
							})								
						});		
					}  
                    



$(function(){
	
/*导航切换*/	

	$(".nav-ul li a").wrapInner( '<span class="out"></span>' );
	
	$(".nav-ul li a").each(function() {
		$( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
	});

	$(".nav-ul li a").hover(function() {
		$(".out",	this).stop().animate({'top':	'46px'},	300); // move down - hide
		$(".over",	this).stop().animate({'top':	'0px'},		300); // move down - show

	}, function() {
		$(".out",	this).stop().animate({'top':	'0px'},		300); // move up - show
		$(".over",	this).stop().animate({'top':	'-46px'},	300); // move up - hide
	});	
	
});



//首页菜单动态调整位置
function posTop(obj) {
	var Top = 0;
	while (obj) {
		Top += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return parseInt(Top);
}
var _menudiv = document.getElementById('submenu').getElementsByTagName('div');

window.onscroll = function(){
	
	if(parseInt(document.documentElement.scrollTop || document.body.scrollTop) > posTop(document.getElementById('nav')) + 46){	

		$(".nav-submenu-xl").css("top",(parseInt(document.documentElement.scrollTop || document.body.scrollTop) - posTop(document.getElementById('submenu'))+46)+"px");
	}else{
		$(".nav-submenu-xl").css("top","46px");
	}
}

//首页导航效果
if(document.getElementById("submenu")){
var _submenu = $("#submenu").find('.submenu1');
var _time = 100;

function autoScrollDown(){
	if($(".nav-submenu").css("height") == '0px'){
		if(!-[1,] && !window.XMLHttpRequest){
			$(".nav-submenu").css("height","420px").find('.submenu1').eq(0).animate({top:'0px'},_time,function(){
				_submenu.eq(1).css("top","0px").animate({top:'84px'},_time,function(){
					_submenu.eq(2).css("top","84px").animate({top:'168px'},_time,function(){
						_submenu.eq(3).css("top","168px").animate({top:'252px'},_time),function(){
							_submenu.eq(4).css("top","252px").animate({top:'336px'},_time);
						}
					});
				});
			});
		}else{
			$(".nav-submenu").css("height","420px").find('.submenu1').eq(0).animate({bottom:'-84px'},_time,function(){
				_submenu.eq(1).css("bottom","-168px").animate({bottom:'-168px'},_time,function(){
					_submenu.eq(2).css("bottom","-252px").animate({bottom:'-252px'},_time,function(){
						_submenu.eq(3).css("bottom","-336px").animate({bottom:'-336px'},_time,function(){
							_submenu.eq(4).css("bottom","-420px").animate({bottom:'-420px;'},_time);
						})
					});
				});
			
			});
		}
	}
}

function autoScrollUp(){
	$(".nav-l").removeClass("nav-l-hover");
	$(".nav-submenu").css("height","0px").find('.submenu1').stop().css("bottom","0px");
	$(".nav-submenu-xl").hide().children('div').hide();
	_submenu.removeClass('submenu1-hover');
}

$(".nav-l").hover(function(){

	clearTimeout(_autoscroll);
	$(".nav-l").addClass("nav-l-hover");
	autoScrollDown();
},function(){
	autoScrollUp();
});

var _autoscroll = setTimeout(function(){autoScrollUp();},5000);

$(function(){
	if (window.location.href == "../../../default.htm" || window.location.href == "../../../default.htm"){ 
	$(".nav-l").addClass("nav-l-hover");
	autoScrollDown();
	}
}); 

_submenu.hover(function(){
	_submenu.removeClass('submenu1-hover').eq($(this).index()).addClass('submenu1-hover');
	$(".nav-submenu-xl").show().children('div').hide().eq($(this).index()).show();
	
});
}













