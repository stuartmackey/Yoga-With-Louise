 $(function() {
    $("#menu").lavaLamp({
        fx: "backout", 
        speed: 700,
        click: function(event, menuItem) {
 
 			if (menuItem.id != "") {
     
     			$(".content").each(function() {						
					$(this).hide();
				});								
				
				$("#" + menuItem.id.replace('menu','content')).fadeIn("slow");
			}
													
            return false;	                    
        }
    });
  
  	$(".content").each(function() {
  		$(this).corner();
  		$(this).hide();
  	});	
  	
  	$("#content_home").show();
  	
  	$('a.email').nospam({
       	replaceText: true,
			filterLevel: 'low'
    });
    
    $("div#content_timetable div.day div.entry div.type").wrapInner("<a href='' class='classTypeLink'></a>");
    $("div#content_timetable div.day div.entry div.massagetype").wrapInner("<a href='' class='massageTypeLink'></a>");
    $("div#content_timetable_future div.day div.entry div.type").wrapInner("<a href='' class='classTypeLink'></a>");
    $("div#content_timetable_future div.day div.entry div.massagetype").wrapInner("<a href='' class='massageTypeLink'></a>");
    $("span.contactLink").wrapInner("<a href='' class='contactLink'></a>");



	$('a.classTypeLink').bind('click',
								function(event) {
									$(".content").each(function() {						
										$(this).hide();
									});
									
									$("#content_classes").fadeIn("slow");
									
									return false;
								}); 

	$('a.massageTypeLink').bind('click',
								function(event) {
									$(".content").each(function() {						
										$(this).hide();
									});
									
									$("#content_massage").fadeIn("slow");
									
									return false;
								}); 

	$('a.contactLink').bind('click',
								function(event) {
									$(".content").each(function() {						
										$(this).hide();
									});
									
									$("#content_contact").fadeIn("slow");
									
									return false;
								});  
								
	$('#menu_timetable_future').hide();   
    
});
