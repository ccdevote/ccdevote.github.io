/**
 * Created by mzy on 14-4-2.
 */
$(document).ready(function(){
    var post= $("#post");
    var postImg = $("#post img");
    console.log(post.width()*0.8);
    postImg.addClass("img-rounded").width(parseInt(post.width()*0.8));
    postImg.css({
       "margin-left":post.width()*0.1
    });
    $(window).resize(function(){
        postImg.width(parseInt(post.width())*0.8);
        postImg.css({
            "margin-left":parseInt(post.width())*0.1
        });
    });

  // Top Bar
  $('#goto_top_btn').click(function() {
        var s = $(window).scrollTop(),h = $(window).height();
        if (s > h * 2) {
            $('html, body').scrollTop(0);
        } else {
            $('html,body').animate({scrollTop: '0px'}, 300);
        }
    });
})
