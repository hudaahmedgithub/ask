$(document).ready(function(){
    
    
    // Show Navbar when Click on icon
    $('i.icon').click(function(){
        $('nav.nav-list').slideToggle()
    });
	//when scroll body..sticky navbar still on links
	$(window).scroll(function(){
		var sc= $(this).scrollTop;
		if(sc > 50  )
		{
			$('header').addClass('sticky');
		}
		else
		{
			$('header').removeClass('sticky');
		}
	}
	
});
	
});