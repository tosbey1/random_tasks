$("a[href$='.pdf']").attr('id', 'url').addClass('pdf').prepend('<i class="fa fa-file-pdf-o"></i>')

function formatBytes(bytes,decimals) {
   if(bytes == 0) return '0 Byte';
   var k = 1000;
   var dm = decimals + 1 || 3;
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   var i = Math.floor(Math.log(bytes) / Math.log(k));
   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}
$('a').each(function() {
      function isExternal(link) {
        return link.hostname !== window.location.hostname;
      }
      if ((isExternal(this)) && !($(this).hasClass('external-false') || $(this).parent().parent().hasClass('external-false')) ) {
        return $(this).addClass('external fancybox')
          .append($('<i>').addClass('fa fa-external-link'));
      }
    });

$(".pdf").each(function(event) {
  if(!$(this).hasClass( "external" )){
  var request;
  var pdf = $(this);
  request = $.ajax({
    type: "HEAD",
    url: $(this).attr('href'),
    success: function(e) {
      var fileSize = request.getResponseHeader("Content-Length")
      $(pdf).append(" (" + formatBytes(fileSize) + ")");
    }
  });
}
});