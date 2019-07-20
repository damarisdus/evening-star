$(function() {
    
    $(window).stellar();
    
    $(".item").draggable();
    $(".cassini-moon").draggable();
    $(".single-moon").draggable();
    $(".wheel").draggable();
    $(".wheel2").draggable();
    $(".prince").draggable();
    
    $("nav a").click(function(){
        var page_id = $ (this).attr("link");
        $(window).scrollTo($(page_id), 4000);  
    });
    
    $("#page2").waypoint(function(direction) {
        if(direction == 'right') {
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
        horizontal: true
    });
    
        $("#page3").waypoint(function(direction) {
        if(direction == 'right') {
            $("nav a").removeClass("selected");
            $(".page3_link").addClass("selected");
            $(".fadeIn").fadeIn(1000);
        }
        else {
            $("nav a").removeClass("selected");
            $(".page2_link").addClass("selected");
            $(".fadeIn").fadeOut(1000);
        }
        
    },{ 
        horizontal: true
    });
    
        $("#page4").waypoint(function(direction) {
        if(direction == 'right') {
            $("nav a").removeClass("selected");
            $(".page4_link").addClass("selected");
        }
        else {
            $("nav a").removeClass("selected");
            $(".page3_link").addClass("selected");
        }
        
    },{ 
        horizontal: true
    });
	
     function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }
    
    var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'http://web.pdx.edu/~ddusciuc/342/evening_3/sound/gear_4sec.mp3');

$('nav').click(function() {  
    audioElement.play();

});
    
    function PlaySound(path) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
}
    
        $(document).tooltip();
    
    
    // Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
 };
    }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
};

    

    
});
