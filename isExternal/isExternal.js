$('a').each(function() {
  function isExternal(link) {
    return link.hostname !== window.location.hostname;
  }
  var mailTo = $('a[href^=mailto]').length;
  if (isExternal(this) && mailTo >=1) {
    return $(this).addClass('external fancybox')
      .append($('<i>').addClass('fa fa-external-link'));
  }
});
