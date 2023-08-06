$(document).ready(function () {
      
      // navbar color
      $(window).scroll(function () { 
            let x= $(window).scrollTop();

            if (x>135) {
                  $(".navcreat").css("background","black");
            }else{
                  $(".navcreat").css("background","transparent");
            }
      });
      
      







});


