/**
 * Created by mzy on 14-4-2.
 */
$(document).ready(function(){
  $('#goto_top_btn').click(function() {
        var s = $(window).scrollTop(),h = $(window).height();
        if (s > h * 2) {
            $('html, body').scrollTop(0);
        } else {
            $('html,body').animate({scrollTop: '0px'}, 300);
        }
    });
})
