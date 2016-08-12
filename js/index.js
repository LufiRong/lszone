//初始化
var init = function(){
	//页面自适应
	var screenWidth = $('body').width();
	var fontS = screenWidth/750*100;
	var html = document.getElementsByTagName('html')[0];
	html.style.fontSize = fontS+'px';
};
init();
//微信显示开关
$('#weixin').on('click',function(){
	$('.weixinbox').toggle();
});
