$( document ).ready(function() {
var hide = Cookies.get('hide');
$('#close').click(function(){
	$('.button').hide();
  Cookies.set('hide','close');
});
if(hide){
	$('.button').hide();
}
console.log(hide);
});