$(document).ready(function(){
$('#content_blocks').find('[href*="Q:"]').click(function(){

      //Expand or collapse this panel
      $(this).next().slideToggle('fast');

      //Hide the other panels
      $('.block').not($(this).next()).slideUp('fast');

    });
})