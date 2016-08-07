
//弹幕开关
$('.switchbtn').on('click',function(){
	$(this).toggleClass('open');
});

var flash = '<object classid="clsid:F08DF954-8592-11D1-B16A-00C0F0283628" id="Slider1"width="100" height="50"><param name="movie" value="路径/文件名称.swf"><param name="quality" value="high"><param name="wmode" value="transparent"><embed src="../images/flash.swf" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="100%" height="210" wmode="transparent"></embed></object>';

$('.subnav li a').on('click',function(){
	var changebox = $('.adarea .subbox');
	$('.adarea .subbox, .subnav li a').removeClass('active');
    
    if($(this).attr('data-id') == 1) {
    	$(changebox[1]).html(flash);
    } else {
        $(changebox[1]).html('');
    }
    $(changebox[$(this).parent().index()]).addClass('active');
    $(this).addClass('active');
});

