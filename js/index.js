$(function() {
	 //initialising tooltip
  $('[data-toggle="tooltip"]').tooltip();
	
	//MENU BAR
	//slide in
$('#menubar-slider').children('a:first-child').click(function(){
	$('#menubar-slider').css('left','46px');
	$('#menubar').css('left','-40px');
	$(this).toggleClass('hidden');
	$(this).next().toggleClass('hidden');
});
	//Slide out
$('#menubar-slider').children('a:last-child').click(function(){
	$('#menubar-slider').css('left','10px');
	$('#menubar').css('left','-80px');
	$(this).toggleClass('hidden');
	$(this).prev().toggleClass('hidden');
});
	//END MENU BAR
	
	//SKILLS
	  $(window).scroll(function(event) {
	var vwidth =$(window).width(),
	hubTop = $('.hub')[0].getBoundingClientRect().top,
	viewportHeight = $(window).height(),
	items = $('.el').length,
	r = 200,
	angle = 0,
    increase = (Math.PI * 2) / items,
    x = $('.hub').offset().left,
    y = $('.hub').offset().top;
	
  if(hubTop < viewportHeight){
   $('.el').each(function() {
     
     if(vwidth > 500){
		x = r * Math.cos(angle);
		y = r * Math.sin(angle);
		$(this).css('transform', 'translate(' + x + 'px,' + y + 'px)');
	}
	else{
		r=100;
		x = r * Math.cos(angle);
		y = r * Math.sin(angle);
		$(this).css('transform', 'translate(' + x + 'px,' + y + 'px) scale('+0.5+','+0.5+')');
	}
     angle += increase;
   });
   }
   });
   //END SKILLS
 
 //EMAIL BUTTON
 $('#email-button').click(function(){
	
		$(this).text('brarharman009@gmail.com');
 });
 })


