$(function() {
	var h = $(window).height(); // ブラウザウィンドウの高さを取得する
	
	$('body').css('display','none'); // コンテンツを非表示にする
	$('#loading ,.loading-msg').height(h).css('display','block');
});

$(window).on('load', function () { // 読み込み完了したら実行する
	$('#loading, .loading-msg').delay(900).fadeOut(800);// ローディングを隠す
	$('body').css('display', 'block');// コンテンツを表示する 
});

$(function() {
	var topMenu = $('.pc-nav');    
	topMenu.hide();
	$(this).scroll(function () {
			if ($(this).scrollTop() > 80) {
					topMenu.fadeIn();
			} else {
					topMenu.fadeOut();
			}
	});
});

$(function () {
  var $body = $('body');
  $('.toggle_btn').on('click', function () {
    $body.toggleClass('open-menu');
  });
 
  $('.close-menu').on('click', function () {
    $body.removeClass('open-menu');
  });
});



