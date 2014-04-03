/**
 * Created by mzy on 14-4-2.
 */
$(function() {
  var ajaxLoading = false;
  var ulNode = $('ul.timeline');
  function initLiNodes() {
    var liNodes = ulNode.find('li'), count = liNodes.length, i, liNode;
    for(i=0; i<count; i++) {
      liNode = $(liNodes.get(i));
      if(i % 2 !== 0) {
	liNode.addClass('alt');
      } else {
	liNode.removeClass('alt');
      }
      var num  = liNode.find(".content>pre").size()
      liNode.find('.number').text(num);
    }
  }
  $('#fetchNextData').click(function() {
    var $this = $(this);
    $this.addClass('disabled').text('正在加载后二十条数据...');
    ajaxLoading = true;

    $.get('./version_data_' + nextDataNumber +'.txt', function(data) {
      ajaxLoading = false;
      ulNode.append(data);
      $this.removeClass('disabled').text('后二十条数据');
      nextDataNumber--;

      if(nextDataNumber === 0) {
	$this.hide();
      }

      initLiNodes();
    });

  });

  initLiNodes();

  /*
   $(window).scroll(function() {

   if($(document).height() - $(window).height() - $(document).scrollTop() < 10) {
   if(!ajaxLoading) {
   $('#fetchNextData').click();
   }
   }

   });
   */

});


