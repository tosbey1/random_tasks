$('a').each(function() {
  function isExternal(link) {
    return link.hostname !== window.location.hostname;
  }
  var mailTo = $('a[href^=mailto]').length;
  if ((isExternal(this) && !($(this).hasClass('external-false') || $(this).parent().parent().hasClass('external-false')) && mailTo >=1)) {
    return $(this).addClass('external fancybox')
      .append($('<i>').addClass('fa fa-external-link'));
  }
});
