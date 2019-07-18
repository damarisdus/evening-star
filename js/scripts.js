$(function() {
        $(window).stellar();
    
    var s = skrollr.init({
        render: function(data){
            $(".info").text(data.curTop);
        }
    });
    
    $(window).stellar();
    
    $("nav a").click(function(){
        var page_id = $(this).attr("link");
        $(window).scrollTo($(page_id), 500);
    });
    
    $("#page2").waypoint(function(direction){
        if(direction == 'top'){
            $("nav a").removeClass("selected");
            $(".page2_link").addClass("selected");
            $(".fadeIn").fadeIn(1000);
        }
        else {
            $("nav a").removeClass("selected");
            $(".page1_link").addClass("selected");
            $(".fadeIn").fadeOut(1000);
        }
    },{ 
        horizontal: false
        
    });
    
    
    $("#page3").waypoint(function(direction){
        if(direction == 'top'){
            $("nav a").removeClass("selected");
            $(".page3_link").addClass("selected");
            $(".fadeIn").fadeOut(1000);
        }
        else {
            $("nav a").removeClass("selected");
            $(".page2_link").addClass("selected");
            $(".fadeIn").fadeIn(1000);
        }
    },{ 
        horizontal: false
        
    });
    
    $("#page4").waypoint(function(direction){
        if(direction == 'top'){
            $("nav a").removeClass("selected");
            $(".page4_link").addClass("selected");
        }
        else {
            $("nav a").removeClass("selected");
            $(".page3_link").addClass("selected");
        }
    },{ 
        horizontal: false
        
    });   
//      $('.title').delay(2000).fadeIn('slow');
});  

  
       

	