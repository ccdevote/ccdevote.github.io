/**
 * Created by mzy on 14-4-2.
 */
$(document).ready(function(){
    var post= $("#post");
    var postImg = $("#post img");
    postImg.addClass("img-rounded").width(parseInt(post.width()*0.8));
    postImg.css({
       "margin-left":post.width()*0.1
    });
    $("table").addClass("table table-bordered").css({"margin-left":post.width()*0.1}).width(post.width()*0.8);
    $(window).resize(function(){
        postImg.width(parseInt(post.width())*0.8);
        postImg.css({
            "margin-left":parseInt(post.width())*0.1
        });
        $("table").css({
	  "margin-left":post.width()*0.1
	}).width(parseInt(post.width())*0.8);
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
